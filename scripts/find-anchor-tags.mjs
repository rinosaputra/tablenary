#!/usr/bin/env node
/**
 * find-anchor-tags.mjs
 *
 * Scans all .tsx files under apps/web/src for usage of the HTML `<a>` tag
 * (used as a Next.js routing shortcut by code generators / linters like
 * better-auth's Link-tag rule). Emits a JSON report to .logs/<timestamp>.json
 * with one entry per file containing anchors.
 *
 * Usage:
 *   node scripts/find-anchor-tags.mjs
 *   node scripts/find-anchor-tags.mjs --src apps/web/src --out .logs
 *
 * Output shape:
 *   {
 *     "scannedAt": "2026-06-27T...",
 *     "src": "apps/web/src",
 *     "totalFiles": 42,
 *     "filesWithAnchors": 5,
 *     "results": [
 *       {
 *         "file": "apps/web/src/modules/landing/components/hero-section.tsx",
 *         "count": 2,
 *         "lines": [
 *           { "line": 18, "column": 4, "snippet": "<a href=\"#features\">" },
 *           { "line": 22, "column": 4, "snippet": "<a href=\"/login\">" }
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
 * Match opening `<a` or `<a ...>` tags.
 * - Skips JSX member expressions like `<Anchor.Foo>` (capitalized, or contains `.`).
 * - Skips inside strings/comments is intentionally NOT done — scanning
 *   the raw source is fine for a lint-style audit (small false-positive
 *   surface vs. implementing a full TS parser).
 */
const ANCHOR_TAG_RE = /<\s*a(\s|>|\/)/g;

function findAnchorsInFile(filePath) {
  const source = readFileSync(filePath, "utf8");
  const lines = source.split(/\r?\n/);
  const matches = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Reset lastIndex per line because we use /g on a fresh substring.
    ANCHOR_TAG_RE.lastIndex = 0;
    let m;
    while ((m = ANCHOR_TAG_RE.exec(line)) !== null) {
      // Find leading non-whitespace before `<` to ensure it's the tag, not `<a-foo>`.
      const before = line.slice(0, m.index);
      if (/\b[A-Za-z_$][A-Za-z0-9_$.]*$/.test(before)) continue;
      matches.push({
        line: i + 1,
        column: m.index + 1,
        snippet: line.trim().slice(0, 200),
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
    const anchors = findAnchorsInFile(file);
    if (anchors.length > 0) {
      results.push({
        file: relative(root, file).replaceAll("\\", "/"),
        count: anchors.length,
        lines: anchors,
      });
    }
  }

  const report = {
    scannedAt: new Date().toISOString(),
    src: relative(root, srcAbs).replaceAll("\\", "/"),
    totalFiles: files.length,
    filesWithAnchors: results.length,
    results,
  };

  const stamp = report.scannedAt.replace(/[:.]/g, "-");
  const outFile = join(outDir, `anchor-tags-${stamp}.json`);
  writeFileSync(outFile, JSON.stringify(report, null, 2) + "\n", "utf8");

  console.log(
    `Scanned ${report.totalFiles} .tsx files in ${report.src}; ` +
    `${report.filesWithAnchors} contain <a> tags.`,
  );
  console.log(`Wrote: ${relative(root, outFile)}`);
}

main();
