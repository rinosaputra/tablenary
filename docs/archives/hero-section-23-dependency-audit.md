# Update HeroSection → hero-section-23 — Dependency Audit

> Sumber: `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\hero-section-23\`
> Target adaptasi: `E:\tablenary\apps\web\src\public\components\hero-section.tsx`

## 1. Files Sumber (hero-section-23)

| File | Tipe | Deskripsi |
| ---- | ---- | --------- |
| `hero-section-23.tsx` | Component utama | Hero section dengan AnimatedBeam, Marquee, Stats cards |
| `header.tsx` | Header/navigation | Sticky header dengan Logo + HeroNavigation02 + Login button |

## 2. UI Components yang Dibutuhkan (dari `@/components/ui/`)

| Component | Sudah Ada di Tablenary | Lokasi di shadcn-studio | Lokasi di Tablenary (ada?) | Aksi |
| ---- | ---- | ---- | ---- | ---- |
| `animated-beam` | ❌ Belum ada | `E:\shadcn-ui-studio\nextjs\components\ui\animated-beam.tsx` | ❌ Tidak ada | Salin ke `shared/shadcn-studio-ui/animated-beam.tsx` |
| `border-beam` | ❌ Belum ada | `E:\shadcn-ui-studio\nextjs\components\ui\border-beam.tsx` | ❌ Tidak ada | Salin ke `shared/shadcn-studio-ui/border-beam.tsx` |
| `marquee` | ❌ Belum ada | `E:\shadcn-ui-studio\nextjs\components\ui\marquee.tsx` | ❌ Tidak ada | Salin ke `shared/shadcn-studio-ui/marquee.tsx` |
| `motion-preset` | ✅ Sudah ada | `E:\shadcn-ui-studio\nextjs\components\ui\motion-preset.tsx` | ✅ `shared/shadcn-studio-ui/motion-preset.tsx` | Sudah ada |
| `rating` | ✅ Sudah ada | `E:\shadcn-ui-studio\nextjs\components\ui\rating.tsx` | ✅ `shared/shadcn-studio-ui/rating.tsx` | Sudah ada |
| `word-rotate` | ❌ Belum ada | `E:\shadcn-ui-studio\nextjs\components\ui\word-rotate.tsx` | ❌ Tidak ada | Salin ke `shared/shadcn-studio-ui/word-rotate.tsx` |
| `avatar` | ✅ Sudah ada | `E:\shadcn-ui-studio\nextjs\components\ui\avatar.tsx` | ✅ `shared/ui/avatar.tsx` | Sudah ada |
| `button` | ✅ Sudah ada | `E:\shadcn-ui-studio\nextjs\components\ui\button.tsx` | ✅ `shared/ui/button.tsx` | Sudah ada |

## 3. Component Blocks yang Dibutuhkan

| Block | Sudah Ada di shadcn-studio | Lokasi | Aksi di Tablenary |
| ---- | ---- | ---- | ---- |
| `StatisticsCard` (statistics-card-03) | ✅ Flat file | `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\statistics-card-03.tsx` | Salin + adaptasi |
| `RatingsCard` (statistics-card-04) | ✅ Flat file | `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\statistics-card-04.tsx` | Salin + adaptasi |
| `TotalSalesCard` (chart-total-sales) | ✅ Flat file | `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\chart-total-sales.tsx` | Salin + adaptasi |

> **Catatan:** Ketiga cards ini saling bergantung pada `recharts` (sudah ada di package.json Tablenary) dan SVG inline.

## 4. Assets / SVG yang Dibutuhkan

| Asset | Status | Lokasi di shadcn-studio |
| ---- | ---- | ---- |
| `hero-svg` | ❌ Tidak ada sebagai file `.svg` | Mungkin inline di component lain |
| `customers-card-svg` | ❌ Tidak ada sebagai file `.svg` | Mungkin inline di component lain |

> **Catatan:** Kedua SVG ini tidak ditemukan di filesystem shadcn-studio. Kemungkinan sudah di-inline di file `statistics-card-03.tsx` / `statistics-card-04.tsx` atau mengambil dari CDN. Perlu dicek lebih lanjut saat copy.

## 5. Header Dependencies

| Dependency | Status |
| ---- | ---- |
| `hero-navigation-02.tsx` | ✅ Ada di `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\hero-navigation-02.tsx` |
| `shadcn-studio/logo.tsx` | ✅ Ada di `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\logo.tsx` |

> **Catatan:** `public-header.tsx` yang ada sudah menangani navigasi secara mandiri. Adaptasi header dari hero-section-23 mungkin tidak diperlukan karena Tablenary sudah punya `public-header.tsx` sendiri dengan struktur berbeda (menggunakan React Router, bukan anchor links).

## 6. Packages / Dependencies

### Sudah dimiliki Tablenary ✅

| Package | Versi di Tablenary | Digunakan di hero-23 |
| ---- | ---- | ---- |
| `motion` | `^12.42.0` | ✅ animated-beam, border-beam, motion-preset, word-rotate |
| `motion/react` | — (via motion) | ✅ import dari `motion/react` |
| `lucide-react` | `^1.21.0` | ✅ PlayIcon, RocketIcon, TicketCheckIcon |
| `clsx` | `^2.1.1` | ✅ cn utility |
| `tailwind-merge` | `^3.6.0` | ✅ cn utility |
| `tw-animate-css` | `^1.4.0` | ✅ @import di globals.css |
| `recharts` | `3.8.0` | ✅ TotalSalesCard, StatisticsCard |
| `react` | `^19.2.7` | ✅ useRef, useEffect, useState |

### Tidak perlu tambahan package ✅

Semua dependencies hero-section-23 sudah dipenuhi oleh package yang sudah terinstall di `apps/web/package.json`.

## 7. Import Path Mapping

Import di shadcn-studio → Import di Tablenary:

| shadcn-studio import | Tablenary target |
| ---- | ---- |
| `@/components/ui/animated-beam` | `@/shared/shadcn-studio-ui/animated-beam` |
| `@/components/ui/border-beam` | `@/shared/shadcn-studio-ui/border-beam` |
| `@/components/ui/marquee` | `@/shared/shadcn-studio-ui/marquee` |
| `@/components/ui/word-rotate` | `@/shared/shadcn-studio-ui/word-rotate` |
| `@/components/ui/motion-preset` | `@/shared/shadcn-studio-ui/motion-preset` |
| `@/components/ui/rating` | `@/shared/shadcn-studio-ui/rating` |
| `@/components/ui/avatar` | `@/shared/ui/avatar` |
| `@/components/ui/button` | `@/shared/ui/button` |
| `@/components/shadcn-studio/blocks/statistics-card-03` | `@/shared/shadcn-studio-ui/blocks/statistics-card-03` |
| `@/components/shadcn-studio/blocks/statistics-card-04` | `@/shared/shadcn-studio-ui/blocks/statistics-card-04` |
| `@/components/shadcn-studio/blocks/chart-total-sales` | `@/shared/shadcn-studio-ui/blocks/chart-total-sales` |
| `@/lib/utils` | `@/shared/lib/utils` |
| `lucide-react` | `lucide-react` |

## 8. Ringkasan Langkah

### Langkah 1: Copy UI Components ke `shared/shadcn-studio-ui/`
- [ ] `animated-beam.tsx`
- [ ] `border-beam.tsx`
- [ ] `marquee.tsx`
- [ ] `word-rotate.tsx`

### Langkah 2: Copy Component Blocks ke `shared/shadcn-studio-ui/blocks/`
- [ ] `statistics-card-03.tsx`
- [ ] `statistics-card-04.tsx` (RatingsCard)
- [ ] `chart-total-sales.tsx`

### Langkah 3: Copy/Adaptasi Header
- [ ] `hero-navigation-02.tsx` → hanya jika header perlu diganti total
- [ ] `shadcn-studio/logo.tsx` → hanya jika perlu Logo shadcn-studio

### Langkah 4: Adaptasi HeroSection & Header di Tablenary
- [ ] Update `hero-section.tsx` — ganti konten dengan hero-section-23 structure
- [ ] Update `public-header.tsx` atau biarkan — perlu diskusi apakah header perlu berubah

### Langkah 5: Update Import Paths & Index Exports
- [ ] Pastikan path alias `@/shared/shadcn-studio-ui/*` resolve di tsconfig/vite
- [ ] Update export di index jika ada

## 9. Catatan Penting

1. **HeroSection-23 menggunakan `use client` directive** — Tablenary pakai Vite + React Router (bukan Next.js App Router), jadi semua komponen sudah implicit client. Directive `'use client'` bisa dihapus.

2. **Navbar/Header**: hero-section-23 header menggunakan `HeroNavigation02` dari shadcn-studio dengan anchor links (`href='#'`). Tablenary sudah punya `public-header.tsx` yang menggunakan React Router (`Link`). Ini perbedaan arsitektural signifikan — kemungkinan public-header tidak perlu diubah kecuali user minta.

3. **Image/SVG assets**: hero-section-23 mengandalkan `HeroSvg` dan `CustomersCardSvg` yang tidak ditemukan di filesystem. Perlu dicek apakah ini inline SVG di statistics-card components atau mengambil dari CDN external.

4. **Recharts v3**: hero-section-23 menggunakan Recharts yang sudah dimiliki Tablenary (`recharts@3.8.0`), tapi perlu dipastikan versi API compatible.

5. **Marquee brand logos**: hero-section-23 menampilkan logo perusahaan dari URL CDN eksternal (`cdn.shadcnstudio.com`). Untuk Tablenary, ini bisa diganti dengan partner/client logos lokal.
