# Update LogoCloud → logo-cloud-07 — Dependency Audit

> Sumber: `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\logo-cloud-07\`
> Target adaptasi: `E:\tablenary\apps\web\src\public\components\logo-cloud.tsx`

## 1. Files Sumber (logo-cloud-07)

| File | Tipe | Deskripsi |
| ---- | ---- | --------- |
| `logo-cloud-07.tsx` | Component utama | Logo cloud dengan Orbiting rings animation + Badge + CTA button |

## 2. UI Components yang Dibutuhkan (dari `@/components/ui/`)

| Component | Sudah Ada di Tablenary | Lokasi di shadcn-studio | Lokasi di Tablenary (ada?) | Aksi |
| ---- | ---- | ---- | ---- | ---- |
| `badge` | ✅ Sudah ada | `E:\shadcn-ui-studio\nextjs\components\ui\badge.tsx` | ✅ `shared/ui/badge.tsx` | Sudah ada |
| `button` | ✅ Sudah ada | `E:\shadcn-ui-studio\nextjs\components\ui\button.tsx` | ✅ `shared/ui/button.tsx` | Sudah ada |
| `card` | ✅ Sudah ada | `E:\shadcn-ui-studio\nextjs\components\ui\card.tsx` | ✅ `shared/ui/card.tsx` | Tidak dipakai di versi baru |
| `orbiting` | ❌ Belum ada | `E:\shadcn-ui-studio\nextjs\components\ui\orbiting.tsx` | ❌ Tidak ada | Salin ke `shared/shadcn-studio-ui/orbiting.tsx` |
| `motion-preset` | ✅ Sudah ada | `E:\shadcn-ui-studio\nextjs\components\ui\motion-preset.tsx` | ✅ `shared/shadcn-studio-ui/motion-preset.tsx` | Sudah ada |

## 3. Assets / SVG yang Dibutuhkan

| Asset | Status | Lokasi di shadcn-studio |
| ---- | ---- | ---- |
| `Logo` (`@/assets/svg/logo`) | ❌ Tidak ditemukan di file system | — |

> **Catatan:** Komponen `Logo` di import dari `@/assets/svg/logo` — ini adalah file SVG yang diekspor sebagai React component. **Tidak ada di direktori `shadcn-studio/blocks/`** karena kemungkinan berasal dari asset project asli shadcn-studio yang tidak ter-extract. 
>
> **Solusi untuk Tablenary:** Gunakan Logo Tablenary yang sudah ada (`public/logo/`) atau buat SVG inline sederhana sebagai placeholder. Logo dari `@/assets/svg/logo` shadcn-studio tidak bisa di-copy karena filenya tidak tersedia.

## 4. Perbedaan Utama: LogoCloud-01 → LogoCloud-07

### LogoCloud-01 (saat ini di Tablenary)
- Layout **vertical stacked** — header + Card horizontal partner list
- Partner berupa **lucide icons + nama** (`Building2Icon`)
- Statis, tanpa animasi
- Data hardcoded array `partners`

### LogoCloud-07 (baru)
- Layout **two-column** — teks kiri + circular orbiting logo kanan
- Partner berupa **image logos** dalam orbit circular ring
- Menggunakan **Orbiting** component untuk animasi circular
- Ada **Badge "A Legacy of Trust"** + **CTA Button "Join Now"**
- Data via **prop `logos`** (lebih reusable)
- Background **tanpa Card** — langsung section background

## 5. Props & Data Structure

```tsx
// LogoCloud-07 menerima prop:
type Logos = {
  image: string   // path gambar logo (public URL atau relative path)
  alt: string     // alt text
  size: string    // className ukuran gambar (contoh: 'size-16')
}

// LogoCloud-07 expects array:
const logos: Logos[] = [
  { image: "/logos/brand-a.png", alt: "Brand A", size: "size-16" },
  { image: "/logos/brand-b.png", alt: "Brand B", size: "size-12" },
  // dst. — minimum 8 logo untuk tampilan optimal
]
```

> **Implikasi:** Tablenary perlu menyediakan minimal ~8 gambar logo partner. Sementara itu bisa pakai placeholder image dari `/public/logos/` atau URL eksternal.

## 6. CSS Animation yang Dibutuhkan

`Orbiting` membutuhkan Tailwind animation utility `animate-orbit`:

```css
/* Wajib ditambahkan di global.css atau tailwind config */
@keyframes orbit {
  from { transform: rotate(var(--angle)) translateY(var(--radius)) rotate(calc(var(--angle) * -1)); }
  to   { transform: rotate(calc(var(--angle) + 360deg)) translateY(var(--radius)) rotate(calc((var(--angle) + 360deg) * -1)); }
}
.animate-orbit {
  animation: orbit var(--duration, 20s) linear infinite;
}
```

> **Catatan:** Cek apakah animasi ini sudah ada di globals.css Tablenary.

## 7. Packages / Dependencies

### Sudah dimiliki Tablenary ✅

| Package | Versi di Tablenary | Digunakan di logo-07 |
| ---- | ---- | ---- |
| `motion` | `^12.42.0` | ✅ MotionPreset |
| `lucide-react` | `^1.21.0` | — (tidak dipakai di logo-07) |
| `clsx` | `^2.1.1` | ✅ orbiting.tsx |
| `tailwind-merge` | `^3.6.0` | ✅ orbiting.tsx cn() |
| `react` | `^19.2.7` | ✅ React.Children.map |

### Tidak perlu tambahan package ✅

Semua dependencies logo-cloud-07 sudah dimiliki Tablenary. **Satu-satunya baru adalah `orbiting.tsx` yang perlu disalin ke `shared/shadcn-studio-ui/`**.

## 8. Import Path Mapping

Import di shadcn-studio → Import di Tablenary:

| shadcn-studio import | Tablenary target |
| ---- | ---- |
| `@/components/ui/badge` | `@/shared/ui/badge` |
| `@/components/ui/button` | `@/shared/ui/button` |
| `@/components/ui/orbiting` | `@/shared/shadcn-studio-ui/orbiting` |
| `@/components/ui/motion-preset` | `@/shared/shadcn-studio-ui/motion-preset` |
| `@/assets/svg/logo` | ❌ Tidak bisa map — buat inline SVG Tablenary |
| `@/lib/utils` | `@/shared/lib/utils` |

## 9. Ringkasan Langkah

### Langkah 1: Salin `orbiting.tsx` ke Tablenary
- [ ] Copy `E:\shadcn-ui-studio\nextjs\components\ui\orbiting.tsx` → `apps/web/src/shared/shadcn-studio-ui/orbiting.tsx`
- [ ] Update import di orbiting.tsx: `@/lib/utils` → `@/shared/lib/utils`
- [ ] Hapus `'use client'` jika ada

### Langkah 2: Tambahkan CSS animation `animate-orbit`
- [ ] Tambahkan `@keyframes orbit` dan `.animate-orbit` ke `globals.css`

### Langkah 3: Siapkan logo images
- [ ] Buat placeholder logos di `public/logos/` atau gunakan gambar eksternal
- [ ] Minimal 8 logo untuk efek orbiting dua ring

### Langkah 4: Salin + Adaptasi logo-cloud-07.tsx
- [ ] Copy `logo-cloud-07.tsx` → `apps/web/src/public/components/logo-cloud.tsx`
- [ ] Hapus `'use client'` directive
- [ ] Ganti import `@/assets/svg/logo` → Logo inline Tablenary (atau hilangkan center logo sementara)
- [ ] Ganti import paths sesuai mapping di atas
- [ ] Ganti data placeholder dari array Partners ke array `Logos`

### Langkah 5: Verifikasi build
- [ ] Run `pnpm type-check` / `npx tsc --noEmit`
- [ ] Cek compile errors

## 10. Catatan Penting

1. **Perubahan layout radikal** — dari horizontal Card menjadi two-column dengan orbiting animation di kanan. Sesuaikan tinggi section dan spacing agar tidak terlalu besar.

2. **Orbiting component butuh image logos** — tidak seperti versi lama yang pakai icon lucide, versi baru menuntut gambar PNG/SVG transparan. Jika belum tersedia, gunakan placeholder dari service seperti `https://placehold.co/100x100` sementara.

3. **Center logo** — logo di tengah orbit (yang `@/assets/svg/logo`) adalah logo brand shadcn-studio. Di Tablenary, ganti dengan logo aplikasi atau **hilangkan center logo** jika belum ada logo SVG. Center logo bisa di-replace dengan komponen Tablenary logo atau di-set opacity-0 sementara.

4. **Dua ring orbiting** — versi 07 menampilkan 2 ring:
   - Outer ring: 6 logos (radius 200, dashed)
   - Inner ring: 2+ logos (radius 115, reverse, dashed)
   - Pastikan jumlah logos >= 8 untuk tampilan penuh
   
5. **MotionPreset digunakan di semua elemen teks** — pastikan `shared/shadcn-studio-ui/motion-preset.tsx` sudah ada di Tablenary (sudah ada sejak adaptasi hero-section-23).

6. **Tanpa Card wrapper** — versi baru tidak pakai Card component. Design langsung section dengan background putih/default.
