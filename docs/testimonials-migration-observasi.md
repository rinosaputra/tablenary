# Observasi: Migrasi Testimonials Component (testimonials-component-20)

> Tanggal: 2026-06-28  
> Status: Observasi — belum diimplementasi

---

## 1. Referensi: `testimonials-component-20` (shadcn-studio/blocks)

**Sumber:** `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\testimonials-component-20\`

### File yang ada:
| File | Deskripsi |
|------|-----------|
| `testimonials-component-20.tsx` | Komponen utama — layout 2 kolom (kiri: heading + CTA, kanan: Marquee grid) |
| `testimonial-card.tsx` | Kartu per testimonial dengan Rating, Avatar, Platform badge |
| `testimonials-component-20.tsx` (halaman) | Page wrapper dengan data dummy testimonials |

### Tipe data (`TestimonialItem`):
```ts
{
  name: string
  handle: string      // e.g. "@BerryB777"
  avatar: string
  rating: number
  title: string       // judul testimonial
  content: string
  platformName: string // e.g. "G2", "Trustpilot", "Twitter"
  platformImage: string
}
```

### Struktur layout:
- **Desktop (xl):** Grid 2 kolom
  - Kiri: Badge + Heading + Paragraf + Button CTA (semua dengan `MotionPreset` animation)
  - Kanan: 4 Marquee — 2 vertikal (kolom bersebelahan) di desktop, masing-masing menampilkan 4 cards
- **Mobile:** 2 Marquee horizontal bergantian (slice 0-3 dan 4-7)

### Dependencies UI yang dipakai:
- `Badge` (dari `@/components/ui/badge`)
- `Button` (dari `@/components/ui/button`)
- `Marquee` (dari `@/components/ui/marquee`)
- `MotionPreset` (dari `@/components/ui/motion-preset`)
- `Avatar`, `AvatarFallback`, `AvatarImage` (dari `@/components/ui/avatar`)
- `Card`, `CardContent` (dari `@/components/ui/card`)
- `Rating` (dari `@/components/ui/rating`)

---

## 2. Komponen Saat Ini: `testimonials.tsx`

**Lokasi:** `E:\tablenary\apps\web\src\public\components\testimonials.tsx`

### Penggunaan saat ini:
- Menggunakan **Carousel** (`embla-carousel-react` — sudah ada di `package.json`)
- Data: `testimonialsData` dari `../data/testimonials.ts`
- UI: `Avatar`, `Card`, `Carousel`, `Rating`, `CarouselPrevious`, `CarouselNext`
- Animasi: **Tidak ada**

### Perbandingan data tipe:
| Field | Sekarang (`Testimonial`) | Baru (`TestimonialItem`) |
|-------|--------------------------|--------------------------|
| `name` | ✅ | ✅ |
| `role` | ✅ | ❌ |
| `company` | ✅ | ❌ |
| `avatar` | ✅ | ✅ |
| `content` | ✅ | ✅ |
| `rating` | ✅ | ✅ |
| `handle` | ❌ | ✅ |
| `title` | ❌ | ✅ |
| `platformName` | ❌ | ✅ |
| `platformImage` | ❌ | ✅ |

> 💡 **Catatan:** Tipe data saat ini (`Testimonial` di `shared/types.ts`) beda struktur. Perlu diputuskan: ganti tipe data atau buat mapping.

---

## 3. Pindahkan File

**Action:** Pindahkan `testimonials.tsx` → `testimonials/index.tsx`

- **From:** `E:\tablenary\apps\web\src\public\components\testimonials.tsx`
- **To:** `E:\tablenary\apps\web\src\public\components\testimonials\index.tsx`
- Folder `testimonials/` sudah ada (kosong) di lokasi tujuan
- Import path yang berubah: `@/shared/ui/...` tetap sama (alias `@` → `src/`)
- Import data: `../data/testimonials` → `../../data/testimonials` (perlu disesuaikan)

---

## 4. Package yang Perlu Diinstall

| Package | Alasan | Sudah ada? |
|---------|--------|------------|
| **`react-rating-stars-component` atau sejenis** | Untuk `Rating` component — tapi sepertinya sudah pakai `@/shared/shadcn-studio-ui/rating.tsx` | ✅ Sudah ada di `shared/shadcn-studio-ui/rating.tsx` |
| **`@base-ui/react`** | Untuk `Rating` component dari shadcn-studio | ✅ Sudah ada di `package.json` |

> 🟢 **Tidak ada package baru yang perlu diinstall.** Semua UI deps sudah tersedia.

---

## 5. UI yang Perlu Disalin ke `shared/shadcn-studio-ui`

### Yang SUDAH ada di `shared/shadcn-studio-ui/`:
| Komponen | Status |
|----------|--------|
| `rating.tsx` | ✅ Sudah ada |
| `motion-preset.tsx` | ✅ Sudah ada |

### Yang PERLU disalin dari shadcn-studio:
| Komponen | Sumber | Catatan |
|----------|--------|---------|
| `Marquee` | `E:\shadcn-ui-studio\nextjs\components\ui\marquee.tsx` | ❌ Belum ada — perlu disalin |

> ⚠️ **`Marquee` diperlukan.** Tanpa ini, layout 2 kolom dengan Marquee vertikal tidak bisa dirender.

### Cek keberadaan Marquee:
```
E:\shadcn-ui-studio\nextjs\components\ui\marquee.tsx  ← sumber
```

---

## 6. Rekomendasi Implementasi (Berurutan)

1. **Salin `Marquee`** dari `shadcn-studio/components/ui/marquee.tsx` → `apps/web/src/shared/shadcn-studio-ui/marquee.tsx`
2. **Ekspor `Marquee`** di `apps/web/src/shared/shadcn-studio-ui/index.ts`
3. **Pindahkan** `testimonials.tsx` → `testimonials/index.tsx`
4. **Adaptasi** `testimonials/index.tsx` menjadi versi `testimonials-component-20`:
   - Ganti `Carousel` → `Marquee` (vertikal + horizontal untuk mobile)
   - Tambahkan `MotionPreset` animasi
   - Buat `TestimonialCard` komponen internal
   - Sesuaikan tipe data (atau mapping dari `Testimonial` → `TestimonialItem`)
   - Tambahkan Badge, Button CTA di bagian kiri
5. **Update import** di semua file yang merujuk ke `testimonials.tsx` → `testimonials/index.tsx`

---

## 7. Pertanyaan — Dijawab ✅

| # | Pertanyaan | Jawaban |
|---|-----------|---------|
| 1 | Tipe data: `TestimonialItem` atau `Testimonial`? | **TestimonialItem** (tipe baru) |
| 2 | Layout: tetap Carousel atau ganti total ke Marquee grid? | **Ganti total ke Marquee grid** |
| 3 | Gambar platform: CDN atau lokal? | **CDN** (shadcncdn) |
| 4 | Exact replica atau adaptasi design system? | **Exact replica testimonials-component-20** |

---

## 8. Rencana Implementasi (Updated)

1. Salin `Marquee` dari `E:\shadcn-ui-studio\nextjs\components\ui\marquee.tsx` → `apps/web/src/shared/shadcn-studio-ui/marquee.tsx`
2. Ekspor `Marquee` di `index.ts`
3. Pindahkan `testimonials.tsx` → `testimonials/index.tsx`
4. Adaptasi `testimonials/index.tsx` menjadi exact replica `testimonials-component-20`
   - Ganti `Carousel` → `Marquee` (vertikal×2 di desktop, horizontal×2 di mobile)
   - Tambahkan `MotionPreset` animasi
   - Buat `TestimonialCard` sebagai komponen internal
   - Ganti tipe data `Testimonial` → `TestimonialItem` (handle, title, platformName, platformImage)
   - Tambahkan Badge variant outline, Heading, Button CTA
5. Update `../data/testimonials.ts` sesuai `TestimonialItem`
6. Update semua import dari `testimonials` → `testimonials/index`
