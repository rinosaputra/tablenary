# Landing Page Blocks - Shadcn Studio (Vite + React)

**Created:** 2026-06-26
**Source:** Local copy di `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks`

## Catatan Adaptasi: Next.js -> Vite + React

Source code di shadcn-ui-studio awalnya menggunakan **Next.js (App Router, `'use client'`)** dan Radix UI/Base UI primitives. Untuk proyek Tablenary (Vite + React 19 + React Router), block-block perlu diadaptasi:

| Aspek                            | Next.js                                       | Vite + React (Tablenary)            |
| -------------------------------- | --------------------------------------------- | ----------------------------------- |
| `'use client'` directive         | Wajib di Next.js App Router                   | **Hapus**, tidak ada efek di Vite   |
| `@/components/ui/...`            | Path alias Next.js                            | Ganti ke `@/shared/ui/...`          |
| `@/lib/utils`                    | Path alias Next.js                            | Ganti ke `@/shared/lib/utils`       |
| `@/components/shadcn-studio/...` | Internal shadcn-studio                        | Ganti sesuai struktur lokal         |
| `asChild` (Radix)                | Tidak dipakai (preset base-ui pakai `render`) | Wrap dengan `<a>` tags manual       |
| `next/image` / `next/link`       | Next.js                                       | Ganti ke `<img>` dan `<a>`          |
| `framer-motion` / `motion`       | Untuk animasi                                 | `motion/react` (Framer Motion v11+) |
| `next/headers`, server actions   | Server-side                                   | **Hapus**, pindah ke client-only    |

## Rekomendasi Struktur Folder

Semua blok landing/hero disimpan di `modules/landing/` sesuai konvensi domain-driven:

```
modules/landing/
├── pages/
│   └── index-page.tsx              # Landing page utama (/)
├── components/
│   ├── hero-section.tsx            # dari hero-section-01
│   ├── features-section.tsx        # dari features-section-01
│   ├── pricing-component.tsx       # dari pricing-component-01
│   ├── testimonials.tsx            # dari testimonials-component-01
│   ├── cta-section.tsx             # dari cta-section-01
│   ├── logo-cloud.tsx              # dari logo-cloud-01
│   ├── faq-section.tsx             # dari faq-component-01
│   └── bento-grid.tsx              # dari bento-grid-01 (opsional)
├── data/
│   ├── features.ts                 # data fitur
│   ├── pricing.ts                  # data pricing tiers
│   ├── testimonials.ts             # data testimonial
│   ├── faqs.ts                     # data FAQ
│   └── logos.ts                    # data logo cloud
├── hooks/                          # (opsional)
├── types.ts
└── index.ts                        # barrel export
```

## Mapping Block -> Komponen UI yang Diperlukan

### Blok yang Kompatibel (komponen sudah ada di `shared/ui/`)

| Block                | File Sumber                                            | Komponen UI yang Dipakai                |
| -------------------- | ------------------------------------------------------ | --------------------------------------- |
| hero-section-01      | `blocks/hero-section-01/hero-section-01.tsx`           | `Badge`, `Button`                       |
| features-section-01  | `blocks/features-section-01/features-section-01.tsx`   | `Avatar`, `Button`, `Card`              |
| pricing-component-01 | `blocks/pricing-component-01/pricing-component-01.tsx` | `Button`, `Card`, `Switch`, `Separator` |
| cta-section-01       | `blocks/cta-section-01/cta-section-01.tsx`             | `Card`                                  |
| logo-cloud-01        | `blocks/logo-cloud-01/logo-cloud-01.tsx`               | `Card`                                  |
| faq-component-01     | `blocks/faq-component-01/faq-component-01.tsx`         | `Accordion`                             |

### Blok yang Butuh Komponen Tambahan

| Block                     | Komponen UI Tambahan   | Status                                         |
| ------------------------- | ---------------------- | ---------------------------------------------- |
| testimonials-component-01 | Rating (`rating.tsx`)  | Sudah disalin & adaptasi                       |
| bento-grid-01             | MotionPreset (animasi) | Sudah disalin & adaptasi, `motion` ter-install |

## Komponen yang Sudah Disalin (shadcn-studio -> shared/shadcn-studio-ui/)

### 1. Rating (`rating.tsx`)

**Sumber:** `E:\shadcn-ui-studio\nextjs\components\ui\rating.tsx`  
**Target:** `apps/web/src/shared/shadcn-studio-ui/rating.tsx`  
**Perubahan adaptasi:**

- Hapus `'use client';`
- Ganti `import { cn } from '@/lib/utils'` -> `@/shared/lib/utils`
- Tetap menggunakan `class-variance-authority` (sudah ada) + `lucide-react` (sudah ada)
- Mendukung `precision` (partial stars), keyboard navigation, controlled/uncontrolled

### 2. MotionPreset (`motion-preset.tsx`)

**Sumber:** `E:\shadcn-ui-studio\nextjs\components\ui\motion-preset.tsx`  
**Target:** `apps/web/src/shared/shadcn-studio-ui/motion-preset.tsx`  
**Perubahan adaptasi:**

- Hapus `'use client';`
- Menggunakan `motion/react` (import dari `motion` package, baru diinstal via `pnpm add motion`)
- Mendukung fade, slide, blur, zoom animations dengan in-view triggering
- Konfigurasi spring transitions via `transition` prop

### 3. Barrel Export (`index.ts`)

**Target:** `apps/web/src/shared/shadcn-studio-ui/index.ts`

```tsx
export { Rating } from "./rating";
export { MotionPreset } from "./motion-preset";
```

### Cara Penggunaan

```tsx
// Rating - untuk testimonials
import { Rating } from "@/shared/shadcn-studio-ui";

<Rating value={4.5} readOnly size={24} />
<Rating defaultValue={3} max={5} onValueChange={(val) => console.log(val)} />

// MotionPreset - untuk animasi hero/bento
import { MotionPreset } from "@/shared/shadcn-studio-ui";

<MotionPreset fade slide={{ direction: "down" }} transition={{ duration: 0.5 }}>
  <h2 className="text-3xl font-bold">Welcome</h2>
</MotionPreset>
```

## Dependencies Baru yang Diinstal

| Package               | Versi   | Kegunaan                                        |
| --------------------- | ------- | ----------------------------------------------- |
| `@tabler/icons-react` | 3.44.0  | Social icons (GitHub, X, Instagram, YouTube)    |
| `motion`              | 12.42.0 | Animasi untuk MotionPreset (Framer Motion v11+) |

## Image Assets

Logo cloud dan testimonials pakai CDN eksternal `https://cdn.shadcnstudio.com/...`. Untuk Tablenary:

- Logo cloud: gunakan logo SVG brand partner
- Testimonial avatar: gunakan placeholder lokal `/placeholder.svg` atau `<AvatarFallback>`

## Komposisi Landing Page yang Disarankan

```
PublicLayout (header + footer)
└── "/" (Landing Page)
    ├── HeroSection        (hero-section-01)
    ├── LogoCloud          (logo-cloud-01)
    ├── FeaturesSection    (features-section-01)
    ├── PricingComponent   (pricing-component-01)
    ├── Testimonials       (testimonials-component-01)
    ├── FAQ                (faq-component-01)
    └── CTA Section        (cta-section-01)
```

## Langkah Implementasi (Urutan)

1. **Setup folder `modules/landing/`** - buat `pages/`, `components/`, `data/`, `types.ts`, `index.ts`
2. **Copy & adapt hero-section-01** ke `modules/landing/components/hero-section.tsx`
3. **Copy & adapt logo-cloud-01** ke `modules/landing/components/logo-cloud.tsx`
4. **Copy & adapt features-section-01** ke `modules/landing/components/features-section.tsx`
5. ✅ **Rating component sudah tersedia** di `shared/shadcn-studio-ui/rating.tsx`
6. **Copy & adapt testimonials-component-01** ke `modules/landing/components/testimonials.tsx`
7. **Copy & adapt pricing-component-01** ke `modules/landing/components/pricing-component.tsx`
8. **Copy & adapt faq-component-01** ke `modules/landing/components/faq-section.tsx`
9. **Copy & adapt cta-section-01** ke `modules/landing/components/cta-section.tsx`
10. ✅ **MotionPreset sudah tersedia** di `shared/shadcn-studio-ui/motion-preset.tsx`
11. **(Optional) Copy & adapt bento-grid-01**
12. **Buat `pages/index-page.tsx`** yang meng-import semua section
13. **Update `routes-config.tsx`** - tambahkan `index: true` di public children yang load index-page

## Checklist Adaptasi Setiap File

Untuk setiap file yang dicopy dari shadcn-ui-studio:

- [ ] Hapus `'use client';` di baris pertama (jika ada)
- [ ] Ganti `import { ... } from '@/components/ui/...'` ke `'@/shared/ui/...'`
- [ ] Ganti `import { cn } from '@/lib/utils'` ke `'@/shared/lib/utils'`
- [ ] Ganti asChild pattern: `<Button asChild><a href>...</a></Button>` ke `<a href><Button>...</Button></a>`
- [ ] Ganti `next/image` ke `<img>`
- [ ] Ganti `next/link` ke `<a>` atau `Link` dari `react-router`
- [ ] Sesuaikan path import data (jika ada data array inline)

## Referensi Blok

- Hero Section - 41+ blocks
- Features Section - 32+ blocks
- Pricing Component - 20 blocks
- Testimonials - 24+ blocks
- Social Proof - 11+ blocks
- CTA Section - 14+ blocks
- Bento Grid - 24+ blocks
- FAQ Component - 19+ blocks

## Blok yang Sudah Dipakai

| Komponen       | Sumber                | Status               |
| -------------- | --------------------- | -------------------- |
| `PublicHeader` | `navbar-component-05` | Sudah diimplementasi |
| `PublicFooter` | `footer-component-05` | Sudah diimplementasi |
