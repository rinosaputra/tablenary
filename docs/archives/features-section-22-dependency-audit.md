# Update FeaturesSection → features-section-22 — Dependency Audit

> Sumber: `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\features-section-22\`
> Target adaptasi: `E:\tablenary\apps\web\src\public\components\features-section.tsx`
> File sumber: `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\pages\features-section-22.tsx` (halaman wrapper dengan data)

---

## 1. Files Sumber (features-section-22)

| File | Tipe | Deskripsi |
| ---- | ---- | --------- |
| `features-section-22.tsx` | Component utama | Features grid dengan MotionPreset animations, Marquee, cards SEO/Cross-Platform/Dashboards/Social/Analytics |
| `seo-ripple-bg.tsx` | Background animation | Animated ripple circles SVG using `motion/svg` |
| `social-media.tsx` | Sub-component | Animated beam connections between social icons using `AnimatedBeam` |

> **Catatan:** `features-section-22.tsx` di `pages/` adalah page wrapper (data provider), bukan component block. Component block sebenarnya ada di `blocks/features-section-22/features-section-22.tsx`.

---

## 2. Sub-Components yang Dibutuhkan (dari `@/components/shadcn-studio/blocks/`)

| Component | Sudah Ada di Tablenary | Lokasi di shadcn-studio | Lokasi di Tablenary (ada?) | Aksi |
| ---- | ---- | ---- | ---- | ---- |
| `StatisticsCard` (statistics-card-04) | ❌ Belum ada | `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\statistics-card-04.tsx` | ❌ Tidak ada | Salin ke `shared/shadcn-studio-ui/blocks/statistics-card-04.tsx` |
| `EarningReportCard` (chart-earning-report) | ✅ Sudah disalin (user edit) | `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\chart-earning-report.tsx` | ✅ `shared/shadcn-studio-ui/blocks/chart-earning-report.tsx` | Sudah ada (perlu dicek adaptasi) |
| `SeoRippleBg` | ✅ Sudah disalin (user edit) | `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\features-section-22\seo-ripple-bg.tsx` | ❓ Cek lokasi | Sudah ada di user perubahan |

---

## 3. UI Components yang Dibutuhkan (dari `@/components/ui/`)

| Component | Sudah Ada di Tablenary | Lokasi di shadcn-studio | Lokasi di Tablenary | Aksi |
| ---- | ---- | ---- | ---- | ---- |
| `avatar` | ✅ Sudah ada | `E:\shadcn-ui-studio\nextjs\components\ui\avatar.tsx` | ✅ `shared/ui/avatar.tsx` | Sudah ada |
| `badge` | ✅ Sudah ada | `E:\shadcn-ui-studio\nextjs\components\ui\badge.tsx` | ✅ `shared/ui/badge.tsx` | Sudah ada |
| `card` | ✅ Sudah ada | `E:\shadcn-ui-studio\nextjs\components\ui\card.tsx` | ✅ `shared/ui/card.tsx` | Sudah ada |
| `marquee` | ✅ Sudah ada | `E:\shadcn-ui-studio\nextjs\components\ui\marquee.tsx` | ✅ `shared/shadcn-studio-ui/marquee.tsx` | Sudah ada |
| `motion-preset` | ✅ Sudah ada | `E:\shadcn-ui-studio\nextjs\components\ui\motion-preset.tsx` | ✅ `shared/shadcn-studio-ui/motion-preset.tsx` | Sudah ada |
| `grow-button` | ❌ Belum ada | `E:\shadcn-ui-studio\nextjs\components\ui\grow-button.tsx` | ❌ Tidak ada | **Salin ke `shared/shadcn-studio-ui/grow-button.tsx`** |
| `dropdown-menu` | ✅ Sudah ada | `E:\shadcn-ui-studio\nextjs\components\ui\dropdown-menu.tsx` | ✅ `shared/ui/dropdown-menu.tsx` | Sudah ada (dibutuhkan chart-earning-report) |
| `chart` | ✅ Sudah ada | `E:\shadcn-ui-studio\nextjs\components\ui\chart.tsx` | ✅ `shared/ui/chart.tsx` | Sudah ada (dibutuhkan chart-earning-report) |
| `animated-beam` | ❌ Belum ada | `E:\shadcn-ui-studio\nextjs\components\ui\animated-beam.tsx` | ❌ Tidak ada | **Salin ke `shared/shadcn-studio-ui/animated-beam.tsx`** (dibutuhkan social-media.tsx) |

---

## 4. Assets / SVG yang Dibutuhkan

| Asset | Status | Lokasi di shadcn-studio | Aksi di Tablenary |
| ---- | ---- | ---- | ---- |
| `logo-vector.tsx` | ❌ Tidak ada di Tablenary | `E:\shadcn-ui-studio\nextjs\components\assets\svg\logo-vector.tsx` (mungkin ada di blocks dir) | **Salin ke `public/components/features-section/logo-vector.tsx`** |
| `logo.tsx` | ❌ Tidak ada di Tablenary | `E:\shadcn-ui-studio\nextjs\components\assets\svg\logo.tsx` | **Salin ke `public/components/features-section/logo.tsx`** |
| Brand logos (external CDN) | ⚠️ External URLs | `cdn.shadcnstudio.com/ss-assets/brand-logo/*.png` | Ganti dengan lokal atau biarkan external |

> **Catatan:** shadcn-studio menggunakan `Logo` (SVG monogram) untuk avatar fallback di SEO card dan social-media component. Tablenary punya `TablenaryLogo` di `shared/ui/tablenary-logo.tsx` — **lebih baik gunakan yang sudah ada**.
>
> `LogoVector` digunakan di `PrimaryGrowButton` (CTA "Get Started - Free"). Ini perlu disalin atau diganti dengan ikon alternatif.

---

## 5. Header Dependencies

Tidak ada header yang dibutuhkan. features-section-22 tidak memiliki komponen header/navigation.

---

## 6. Packages / Dependencies

### Sudah dimiliki Tablenary ✅

| Package | Versi di Tablenary | Digunakan di features-section-22 |
| ---- | ---- | ---- |
| `motion` | `^12.42.0` | ✅ MotionPreset, seo-ripple-bg (motion/svg), animated-beam |
| `motion/react` | — (via motion) | ✅ import dari `motion/react` |
| `lucide-react` | `^1.21.0` | ✅ ArrowRightIcon, ChevronDownIcon, ChevronUpIcon, EllipsisVerticalIcon |
| `clsx` | `^2.1.1` | ✅ cn utility |
| `tailwind-merge` | `^3.6.0` | ✅ cn utility |
| `class-variance-authority` | `^0.7.1` | ✅ grow-button (buttonVariants) |
| `recharts` | `3.8.0` | ✅ EarningReportCard (BarChart, XAxis) |
| `@base-ui/react` | `^1.6.0` | ✅ dropdown-menu, badge di Tablenary |
| `react` | `^19.2.7` | ✅ useRef, useState, JSX.Element |

### Tidak perlu tambahan package ✅

Semua dependencies features-section-22 sudah dipenuhi oleh package yang sudah terinstall di `apps/web/package.json`.

---

## 7. Import Path Mapping

Import di shadcn-studio → Import di Tablenary:

| shadcn-studio import | Tablenary target |
| ---- | ---- |
| `@/components/ui/grow-button` | `@/shared/shadcn-studio-ui/grow-button` |
| `@/components/ui/animated-beam` | `@/shared/shadcn-studio-ui/animated-beam` |
| `@/components/ui/avatar` | `@/shared/ui/avatar` |
| `@/components/ui/badge` | `@/shared/ui/badge` |
| `@/components/ui/card` | `@/shared/ui/card` |
| `@/components/ui/marquee` | `@/shared/shadcn-studio-ui/marquee` |
| `@/components/ui/motion-preset` | `@/shared/shadcn-studio-ui/motion-preset` |
| `@/components/ui/dropdown-menu` | `@/shared/ui/dropdown-menu` |
| `@/components/ui/chart` | `@/shared/ui/chart` |
| `@/components/ui/button` | `@/shared/ui/button` |
| `@/components/shadcn-studio/blocks/statistics-card-04` | `@/shared/shadcn-studio-ui/blocks/statistics-card-04` |
| `@/components/shadcn-studio/blocks/chart-earning-report` | `@/shared/shadcn-studio-ui/blocks/chart-earning-report` |
| `@/components/shadcn-studio/blocks/features-section-22/seo-ripple-bg` | `@/public/components/features-section/seo-ripple-bg` |
| `@/components/shadcn-studio/blocks/features-section-22/social-media` | `@/public/components/features-section/social-media` |
| `@/assets/svg/logo` | `@/shared/ui/tablenary-logo` (ganti) |
| `@/assets/svg/logo-vector` | `@/public/components/features-section/logo-vector` |
| `@/lib/utils` | `@/shared/lib/utils` |

---

## 8. Ringkasan Langkah

### Langkah 1: Copy UI Components yang Belum Ada ke `shared/shadcn-studio-ui/`
- [ ] `grow-button.tsx` — PrimaryGrowButton, SecondaryGrowButton (butuh `class-variance-authority`, sudah ada)
- [ ] `animated-beam.tsx` — AnimatedBeam (butut `motion`, sudah ada)

### Langkah 2: Copy Component Blocks
- [ ] `statistics-card-04.tsx` → `shared/shadcn-studio-ui/blocks/statistics-card-04.tsx`
- [ ] `seo-ripple-bg.tsx` → `public/components/features-section/seo-ripple-bg.tsx` (atau `shared/shadcn-studio-ui/blocks/`)

### Langkah 3: Copy SVG Assets
- [ ] `logo.tsx` (monogram logo dari shadcn-studio) → `public/components/features-section/logo.tsx` **ATAU** ganti referensi ke `shared/ui/tablenary-logo.tsx`
- [ ] `logo-vector.tsx` → `public/components/features-section/logo-vector.tsx`

### Langkah 4: Buat Folder & Structure
- [ ] Buat `E:\tablenary\apps\web\src\public\components\features-section\`
- [ ] Pindahkan `features-section.tsx` → `features-section/index.tsx`
- [ ] Buat sub-files: `seo-ripple-bg.tsx`, `social-media.tsx`
- [ ] Buat `shared/shadcn-studio-ui/blocks/` jika belum ada

### Langkah 5: Adaptasi Component Utama
- [ ] Update `features-section/index.tsx` — ganti struktur dari flat card grid menjadi bento-style grid
- [ ] Update `features-section/social-media.tsx` — ganti `Logo` → `TablenaryLogo`, ganti CDN image URLs → lokal/static
- [ ] Update import paths sesuai mapping di atas
- [ ] Hapus `'use client'` directives (Vite + React Router, bukan Next.js)
- [ ] Tambahkan data props atau buat default data di Tablenary

### Langkah 6: Update Data
- [ ] Current `features-data.ts` → perlu diupdate structure untuk features-section-22 (6 features → 5 big feature cards)
- [ ] Tambahkan data untuk `realTimeData`, `earningReportData`, `earningReportChartData`, `socialMediaData`
- [ ] Ganti CDN social media images dengan local assets atau placeholder

### Langkah 7: Update Import di Pages/Routes
- [ ] Cari semua tempat yang import `features-section.tsx` → update path ke `features-section/index.tsx`
- [ ] Pastikan routes `index-page.tsx` dan lainnya tetap work

---

## 9. Catatan Penting

### 9.1 Perubahan Struktur Komponen Signifikan

Features-section saat ini (`features-section-01` style) → Simple grid of 6 feature cards dengan icon, title, description.

Features-section-22 → Bento-style layout dengan 5 feature cards:
1. **SEO Card** — Card besar dengan animated ripple background + floating badges + avatar
2. **Cross-Platform Integration** — Double Marquee social badges
3. **Customizable Dashboards** — EarningReportCard chart di dalam card
4. **Social Media Marketing** — SocialMedia component (AnimatedBeam)
5. **Real-Time Analytics** — Marquee berisi StatisticsCards

### 9.2 `features-section-22` Requires 4 Data Props

Component ini menerima props:
```typescript
{
  realTimeData: [...],       // StatisticsCard items
  earningReportData: [...],  // EarningReportCard stat items
  earningReportChartData: [...], // Recharts bar data
  socialMediaData: [...]     // Marquee badge items
}
```

Berbeda dengan features-section saat ini yang menggunakan `featuresData` array dari `../data/features`.

### 9.3 CDN Image Dependencies

`social-media.tsx` menggunakan external CDN images:
- `cdn.shadcnstudio.com/ss-assets/brand-logo/instagram-icon.png`
- `cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-icon.png`
- `cdn.shadcnstudio.com/ss-assets/brand-logo/facebook-icon.png`
- `cdn.shadcnstudio.com/ss-assets/brand-logo/github-icon.png`
- `cdn.shadcnstudio.com/ss-assets/brand-logo/google-icon.png`
- `cdn.shadcnstudio.com/ss-assets/brand-logo/linkdin-icon.png`

**Rekomendasi:** Download dan simpan sebagai local assets, atau gunakan SVG icons dari lucide-react.

### 9.4 AnimatedBeam Complexity

`social-media.tsx` menggunakan `AnimatedBeam` dari `@/components/ui/animated-beam` yang memerlukan:
- Multiple refs (`useRef`) untuk positioning
- Container ref + icon refs
- 6 AnimatedBeam connections (center logo ke 6 social icons)

Ini adalah component yang cukup kompleks dan perlu dipertimbangkan apakah memang diinginkan.

### 9.5 `'use client'` Directive

`seo-ripple-bg.tsx` dan `social-media.tsx` menggunakan `'use client'` directive (Next.js). Di Tablenary (Vite + React), semua component implicit client. **Hapus directive ini saat kop.**

### 9.6 Tailwind CSS v4 Changes

Tablenary menggunakan Tailwind CSS v4 (`tailwindcss@^4.3.1`). Beberapa class di shadcn-studio mungkin perlu penyesuaian:
- `size-*` utilities (Tailwind v4 support, shadcn-studio pakai ini)
- `color-mix()` di grow-button — sudah supported di Tailwind v4
- Custom sizing seperti `size-8.5`, `size-5.5`, `size-45` — perlu cek apakah ada di Tablenary's Tailwind config

### 9.7 Logo Strategy

- shadcn-studio: `Logo` (SVG monogram) → ganti dengan `TablenaryLogo` dari `shared/ui/tablenary-logo.tsx`
- shadcn-studio: `LogoVector` (untuk CTA button) → salin file atau ganti dengan `ArrowRightIcon` dari lucide-react

### 9.8 Component File Organization

**Rekomendasi struktur folder baru:**
```
src/public/components/features-section/
├── index.tsx              # Features component utama
├── seo-ripple-bg.tsx      # Animated ripple SVG
├── social-media.tsx       # AnimatedBeam social icons
├── logo.tsx               # Logo SVG (atau gunakan shared/ui/tablenary-logo)
└── logo-vector.tsx        # Logo vector untuk CTA
```

Atau semua blocks disimpan di `shared/shadcn-studio-ui/blocks/` untuk konsistensi.
