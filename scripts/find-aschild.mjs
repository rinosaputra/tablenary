#!/usr/bin/env node
/**
 * find-aschild.mjs
 *
 * Scans all .tsx files under apps/web/src for usage of the `asChild` prop
 * (used by Base UI, Radix UI primitives, etc.). Emits a JSON report to
 * .logs/<timestamp>.json with one entry per file containing `asChild`.
 *
 * Usage:
 *   node scripts/find-aschild.mjs
 *   node scripts/find-aschild.mjs --src apps/web/src --out .logs
 *
 * Output shape:
 *   {
 *     "scannedAt": "2026-06-27T...",
 *     "src": "apps/web/src",
 *     "totalFiles": 42,
 *     "filesWithAsChild": 5,
 *     "results": [
 *       {
 *         "file": "apps/web/src/public/components/hero-section.tsx",
 *         "count": 2,
 *         "lines": [
 *           { "line": 41, "snippet": "<Button size=\"lg\" variant=\"default\" asChild>" }
 *         ]
 *       }
 *     ]
 *   }
 */
import { readFileSync, readdirSync, mkdirSync, writeFileSync, statSync } from "node:fs";
import { join, relative, resolve, extname } from "node:path";

function parseArgs(argv) {
  const args = { src: "apps/web/src", out: ".logs" };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--src") args.src = argv[++i];
    else if (argv[i] === "--out") args.out = argv[++i];
  }
  return args;
}

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (entry === "node_modules" || entry.startsWith(".")) continue;
      out.push(...walk(full));
    } else if (extname(entry) === ".tsx") {
      out.push(full);
    }
  }
  return out;
}

/**
 * Match `asChild` prop usage in JSX attributes.
 * Handles:
 *   - asChild (unquoted or quoted)
 *   - asChild={true/false/...}
 *   - asChild={someVar}
 *   - asChild={condition ? true : false}
 * Skips: inside strings, HTML comments <!-- asChild -->
 */
const ASCHILD_TAG_RE = /\basChild\b(?::?|=\{|=)/gi;

function findAsChildInFile(filePath) {
  const source = readFileSync(filePath, "utf8");
  const lines = source.split(/\r?\n/);
  const matches = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Skip inside HTML comments
    if (/<!--[\s\S]*?asChild[\s\S]*?-->/.test(line)) continue;

    let match;
    const re = new RegExp(ASCHILD_TAG_RE.source, "gi");
    re.lastIndex = 0;
    while ((match = re.exec(line)) !== null) {
      // Find leading non-whitespace before `asChild` to check context
      const before = line.slice(0, match.index);
      const after = line.slice(match.index);

      // Verify it's a JSX attribute context (after <Tag or space/>)
      // Exclude if it looks like a comment or string literal
      const inComment = /<!--/.test(line) || /\/\/.*asChild/.test(line);
      if (inComment) continue;

      // Determine snippet: grab the tag wrapping this attribute
      // Look backward for opening < and forward for closing > or />
      const openTagMatch = before.match(/<[A-Za-z][A-Za-z0-9._$]*(\s[^>]*)?$/s);
      let tag = "unknown";
      if (openTagMatch) {
        const tagMatch = openTagMatch[0].match(/<\/?([A-Za-z][A-Za-z0-9._$]*)/);
        if (tagMatch) tag = tagMatch[1];
      }

      matches.push({
        line: i + 1,
        snippet: line.trim().slice(0, 200),
        tag,
      });
    }
  }
  return matches;
}

function main() {
  const { src, out } = parseArgs(process.argv.slice(2));
  const root = resolve(process.cwd());
  const srcAbs = resolve(root, src);
  const outDir = resolve(root, out);

  mkdirSync(outDir, { recursive: true });

  const files = walk(srcAbs);
  const results = [];
  for (const file of files) {
    const asChildUsage = findAsChildInFile(file);
    if (asChildUsage.length > 0) {
      results.push({
        file: relative(root, file).replaceAll("\\", "/"),
        count: asChildUsage.length,
        lines: asChildUsage,
      });
    }
  }

  const report = {
    scannedAt: new Date().toISOString(),
    src: relative(root, srcAbs).replaceAll("\\", "/"),
    totalFiles: files.length,
    filesWithAsChild: results.length,
    results,
  };

  // Group by tag for quick overview
  const tagGroups = {};
  for (const r of results) {
    for (const l of r.lines) {
      const tag = l.tag;
      if (!tagGroups[tag]) tagGroups[tag] = { count: 0, files: new Set() };
      tagGroups[tag].count++;
      tagGroups[tag].files.add(r.file);
    }
  }
  report.tagBreakdown = {};
  for (const [tag, data] of Object.entries(tagGroups)) {
    report.tagBreakdown[tag] = {
      totalUsages: data.count,
      files: Array.from(data.files),
    };
  }

  const stamp = report.scannedAt.replace(/[:.]/g, "-");
  const outFile = join(outDir, `aschild-${stamp}.json`);
  writeFileSync(outFile, JSON.stringify(report, null, 2) + "\n", "utf8");

  console.log(
    `Scanned ${report.totalFiles} .tsx files in ${report.src}; ` +
    `${report.filesWithAsChild} contain \`asChild\` usage.`,
  );
  console.log(
    `Tags grouped: ${Object.keys(report.tagBreakdown || {}).join(", ") || "(none)"}`,
  );
  console.log(`Wrote: ${relative(root, outFile)}`);
}

main();
