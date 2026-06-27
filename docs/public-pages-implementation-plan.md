# Plan: Public Pages Implementation

**Created:** 2026-06-27  
**Status:** Draft (pending user review)  
**Scope:** Tambah 9 halaman public baru di `apps/web/src/public/pages/`

## Latar Belakang

[public-routes.ts](apps/web/src/public/public-routes.ts) sudah mendefinisikan 16 route children (3 auth + 1 index sudah ada). Sisa **9 halaman** yang akan dibuat di batch ini. `docs`, `api`, `changelog` **di-skip** — akan dibuat di folder khusus nanti (bukan page statis).

| # | Route | Kategori | Tipe | Skip? |
|---|-------|----------|------|-------|
| 1 | `/features` | Landing | Marketing | ❌ |
| 2 | `/pricing` | Landing | Marketing | ❌ |
| 3 | `/docs` | Resource | — | ⏭️ (ditunda, folder khusus) |
| 4 | `/changelog` | Resource | — | ⏭️ (ditunda, folder khusus) |
| 5 | `/api` | Resource | — | ⏭️ (ditunda, folder khusus) |
| 6 | `/faq` | Support | Marketing (reuse data) | ❌ |
| 7 | `/support` | Support | Content (help center) | ❌ |
| 8 | `/contact` | Support | Form | ❌ |
| 9 | `/community` | Support | Marketing (CTA) | ❌ |
| 10 | `/terms` | Legal | Document | ❌ |
| 11 | `/privacy` | Legal | Document | ❌ |
| 12 | `/cookies` | Legal | Document | ❌ |

Login, register, dan index **tidak dibuat** karena sudah ada di `modules/auth` dan `public/pages/index-page.tsx`.

---

## Strategi

### 1. Reuse Existing Components

Setiap page akan memakai pola komposisi seperti [index-page.tsx](apps/web/src/public/pages/index-page.tsx) — yaitu menggunakan kembali `<HeroSection>`, `<FeaturesSection>`, `<PricingComponent>`, `<FAQSection>`, `<CTASection>` yang sudah ada di `public/components/`.

Pendekatan ini:
- ✅ Konsisten dengan home page (visual identity sama)
- ✅ Tidak copy-paste markup
- ✅ Future-friendly: edit komponen sekali, update semua page
- ⚠️ Trade-off: halaman /features dan /pricing jadi **composite** (menampilkan semua section), bukan deep-dive

### 2. Reuse Existing Data

- `/features` → pakai `featuresData` (sudah ada)
- `/pricing` → pakai `pricingData` (sudah ada)
- `/faq` → pakai `faqData` (sudah ada)

### 3. Data Baru (jika diperlukan)

Hanya untuk halaman baru ini:

| File baru | Untuk halaman |
|-----------|---------------|
| `data/contact.ts` | Form fields, subject options |
| `data/changelog.ts` | Daftar release entries |
| `data/docs.ts` | Daftar docs sections |
| `data/legal.ts` | Konten terms/privacy/cookies (markdown-rendered atau raw text) |
| `data/support.ts` | Daftar help categories |
| `data/community.ts` | CTA cards (Discord, GitHub, Twitter) |

---

## Pemetaan Komponen per Halaman (9 halaman)

### Halaman Landing (2)

| Page | Komposisi | Block Referensi |
|------|-----------|-----------------|
| `/features` | `<HeroSection>` (custom copy) + `<FeaturesSection>` + `<CTASection>` | hero-section-04, features-section-04, cta-section-01 |
| `/pricing` | `<HeroSection>` (custom copy) + `<PricingComponent>` + `<FAQSection>` + `<CTASection>` | hero-section-09, pricing-component-04, faq-component-04, cta-section-01 |

### Halaman Support (4)

| Page | Komposisi | Block Referensi |
|------|-----------|-----------------|
| `/faq` | `<HeroSection>` (kecil) + `<FAQSection>` + `<CTASection>` | hero-section-12 (mini), faq-component-04, cta-section-01 |
| `/support` | `<HeroSection>` (kecil) + grid help categories (Card) + `<CTASection>` | hero-section-12, bento-grid-03 (untuk help cards) |
| `/contact` | `<HeroSection>` (kecil) + `<ContactForm>` (Card dengan Input/Textarea) + info panel + `<CTASection>` | contact-us-page-04 |
| `/community` | `<HeroSection>` (kecil) + grid platform cards (Discord, GitHub, Twitter/X) + `<CTASection>` | app-integration-04 (untuk platform cards) |

### Halaman Legal (3)

| Page | Komposisi | Block Referensi |
|------|-----------|-----------------|
| `/terms` | `<HeroSection>` (mini) + prose content (sections H2/H3) + `<CTASection>` | (tidak ada block spesifik, plain prose) |
| `/privacy` | `<HeroSection>` (mini) + prose content + `<CTASection>` | (plain prose) |
| `/cookies` | `<HeroSection>` (mini) + prose content + `<CTASection>` | (plain prose) |

### Catatan Block Referensi

- **Tidak akan copy-paste mentah** dari `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\` karena:
  - Itu Next.js + custom registry; kita pakai React Router + Base UI
  - Lebih efisien: **reuse existing components** + buat `<PageHeader>` shared
- Block referensi hanya sebagai **panduan layout/style**, bukan source code yang di-import
- Lokasi block di local: `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\[nama-block]`
- Lokasi block di web: `https://shadcnstudio.com/blocks/marketing-ui/[nama-block]`

---

## Komponen Baru yang Mungkin Diperlukan

### Page-level: composition dari existing components

Semua halaman adalah composition layer. **Komponen yang akan dibuat:**

1. **`<PageHeader>`** — header reusable untuk halaman /support, /contact, /community, /faq, /terms, /privacy, /cookies
   - Props: `title`, `subtitle`, optional `badge`, optional `breadcrumbs`
   - Styling: `py-8 sm:py-16 lg:py-24`, `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
   - Lokasi: `apps/web/src/public/components/page-header.tsx`

2. **`<ContactForm>`** — form khusus untuk `/contact`
   - Reuse: `Input`, `Textarea`, `Label`, `Button` dari `@/shared/ui/`
   - Subject options: dari `data/contact.ts`
   - Submit: **UI only** (placeholder, console.log)
   - Lokasi: `apps/web/src/public/components/contact-form.tsx`

3. **`<ContactInfo>`** — info panel untuk `/contact`
   - Email, response time, social links
   - Lokasi: `apps/web/src/public/components/contact-info.tsx`

---

## Struktur File yang Akan Dibuat

```
apps/web/src/public/
├── pages/
│   ├── features-page.tsx          # NEW (komposisi HeroSection + FeaturesSection + CTASection)
│   ├── pricing-page.tsx           # NEW (komposisi HeroSection + PricingComponent + FAQSection + CTASection)
│   ├── faq-page.tsx               # NEW (komposisi HeroSection + FAQSection + CTASection)
│   ├── support-page.tsx           # NEW (HeroSection + help category cards + CTASection)
│   ├── contact-page.tsx           # NEW (HeroSection + ContactForm + info panel + CTASection)
│   ├── community-page.tsx         # NEW (HeroSection + platform cards + CTASection)
│   ├── terms-page.tsx             # NEW (HeroSection mini + prose + CTASection)
│   ├── privacy-page.tsx           # NEW (HeroSection mini + prose + CTASection)
│   └── cookies-page.tsx           # NEW (HeroSection mini + prose + CTASection)
├── components/
│   └── page-header.tsx            # NEW (shared page header untuk halaman2 baru)
├── data/
│   ├── contact.ts                 # NEW (form fields, subject options, contact info)
│   ├── support.ts                 # NEW (help categories: Getting Started, Account, Billing, dll)
│   ├── community.ts               # NEW (platform cards: Discord, GitHub, Twitter)
│   └── legal.ts                   # NEW (terms/privacy/cookies content sebagai typed structure)
```

Total: **9 page files** + **1 shared component** + **4 data files** = **14 file baru**.

**Skip batch ini (untuk nanti di folder khusus):** `docs-page.tsx`, `changelog-page.tsx`, `api-page.tsx`.

---

## Update yang Diperlukan di File Existing

1. **[routes-config.tsx](apps/web/src/routes/routes-config.tsx)** — tambah 9 route entries:
   ```tsx
   {
     path: paths.public.$.features.$path({ relative: true }),
     lazy: async () => ({
       Component: (await import("@/public/pages/features-page")).default,
     }),
   },
   // ... dst untuk 8 halaman lainnya (pricing, faq, support, contact, community, terms, privacy, cookies)
   ```

2. **[public-routes.ts](apps/web/src/public/public-routes.ts)** — **tidak perlu diupdate** (sudah ada semua path).

3. **[public/index.ts](apps/web/src/public/index.ts)** — **tidak perlu diupdate** (hanya export komponen, tidak page).

---

## Risiko & Open Questions

### ❓ Diskusi Diperlukan

1. **Konten Legal (terms/privacy/cookies)** — apakah saya harus:
   - (a) Tulis placeholder generic (ToS boilerplate) untuk di-replace nanti?
   - (b) Hanya heading + "Coming soon" dengan CTA ke support?
   - (c) Tunda halaman legal sampai ada konten final dari legal team?

2. **Contact form** — submit ke mana?
   - (a) Hanya UI, tidak ada submit (cuma console.log)
   - (b) Submit ke email service (perlu config)
   - (c) Submit ke backend endpoint (perlu API route)

3. **API Reference page** — apakah placeholder saja (endpoint list kosong)?
   - (a) Tampilkan struktur endpoint + "Coming soon"
   - (b) Tunda sampai ada docs API

4. **Changelog** — apakah perlu schema versioning tertentu?
   - (a) Pakai struktur sederhana (date, version, items)
   - (b) Tunggu sampai ada release history nyata

5. **i18n** — semua halaman dalam Bahasa Indonesia atau English? Saat ini campur (title English, body ID). Saya akan **ikut pola existing** (campur konsisten dengan index-page).

---

## Urutan Eksekusi (jika disetujui)

1. Setup shared component: `<PageHeader>`
2. Setup data files (konten): 6 file data
3. Create pages (12 file) — paling cepat jika paralel
4. Update `routes-config.tsx` — register 12 route
5. Run `pnpm typecheck` untuk verifikasi
6. Manual smoke test di browser (jika ada)

---

## Detail Referensi Block (dari shadcn-studio)

Daftar block yang menjadi **referensi visual/layout** (tidak di-import mentah):

| Block Path | Page Target | Alasan |
|------------|-------------|--------|
| `blocks/hero-section-04` | `/features` | Hero dengan badge + dual CTA + product preview |
| `blocks/hero-section-09` | `/pricing` | Hero centered dengan badge + single CTA |
| `blocks/hero-section-12` | `/faq`, `/support`, `/contact`, `/community` | Mini hero untuk halaman sub-page |
| `blocks/features-section-04` | `/features` | Grid 4-kolom dengan icon cards |
| `blocks/pricing-component-04` | `/pricing` | Pricing cards dengan toggle bulanan/tahunan |
| `blocks/faq-component-04` | `/faq`, `/pricing` | Accordion 2-kolom (atau single-col) |
| `blocks/contact-us-page-04` | `/contact` | Form di kiri, info di kanan (Card layout) |
| `blocks/bento-grid-03` | `/support` | Help category cards dengan layout bento |
| `blocks/app-integration-04` | `/community` | Platform integration cards (Discord/GitHub/X) |
| `blocks/cta-section-01` | semua | CTA final (sudah dipakai di index-page) |
| `blocks/blog-component-04` | `/changelog` (NANTI) | Timeline/list release (skip batch ini) |
| `blocks/cookies-consent-01` | `/cookies` (referensi style) | Cookie policy page (skip implementasi detail) |

URL web untuk browsing:
- Folder blok: https://shadcnstudio.com/blocks
- Filter kategori: https://shadcnstudio.com/blocks/marketing-ui/[name]
- LLM index: https://shadcnstudio.com/llms.txt

---

## Catatan

- Saya TIDAK akan copy-paste block dari `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\` mentah-mentah. Karena:
  - Itu untuk Next.js + custom registry
  - Kita pakai React Router + Base UI (lihat [docs/ui-base-ui-conventions.md](ui-base-ui-conventions.md))
  - Lebih efisien: pakai ulang existing components + tambahkan 1 shared `<PageHeader>`

- Konvensi styling pakai kelas `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8` (sama dengan section lain) + section wrapper `py-8 sm:py-16 lg:py-24`.

- Pages export default function — `lazy()` di router hanya mendukung default export.

- Halaman `/features` dan `/pricing` dengan composite penuh akan **lebih panjang dari home** tapi menggunakan section yang sama. Ini keputusan sadar untuk konsistensi.