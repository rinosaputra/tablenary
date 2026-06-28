# Observasi: Migrasi CTA Section (cta-section-04)

> Tanggal: 2026-06-28  
> Status: Observasi — belum diimplementasi

---

## 1. Referensi: `cta-section-04` (shadcn-studio/blocks)

**Sumber:** `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\pages\cta-section-04.tsx` → memanggil `cta-section-05/blocks/cta-section-04/cta-section-04.tsx`

### File yang ada:
| File | Deskripsi |
|------|-----------|
| `cta-section-04.tsx` (page) | Page wrapper — langsung render `<CTA />` |
| `cta-section-04.tsx` (block) | Komponen utama — Card CTA dengan gambar dashboard + text content |

### Struktur layout:
- **Dark-themed Card** (`bg-black`) dengan rounded-3xl
- **Desktop (lg+):** Grid 2 bagian
  - Kiri: Gambar dashboard analytics (ada light + dark mode variant) dengan floating animation (`MotionPreset` motionProps)
  - Kanan: Heading + Paragraf + Button CTA (semua white text, dengan `MotionPreset` fade/slide animations)
- **Mobile:** Gambar hidden, content stacked
- Gambar dari CDN: `cdn.shadcnstudio.com/ss-assets/blocks/marketing/cta/image-7.png` (light) dan `image-7-dark.png` (dark)

### Dependencies UI yang dipakai:
- `Button` (dari `@/components/ui/button`)
- `Card`, `CardContent` (dari `@/components/ui/card`)
- `MotionPreset` (dari `@/components/ui/motion-preset`)
- `ArrowRightIcon` (lucide-react)

### Animasi:
- Gambar: floating animation (y: `[0, -10, 0]` infinite)
- Text: fade + blur + slide-up staggered (0, 0.3, 0.6 delay)

---

## 2. Komponen Saat Ini: `cta-section.tsx`

**Lokasi:** `E:\tablenary\apps\web\src\public\components\cta-section.tsx`

### Pola saat ini:
- **Muted background** section
- **Light card** (`rounded-3xl`, border-none, py-16)
- **2 kolom:** text + buttons (wraps di mobile)
- **2 tombol:** "Mulai Gratis" (→ register) + "Masuk" (→ login)
- **Menggunakan `render`** prop (sudah migrated dari `asChild`) ✅
- **Tanpa gambar/visual**
- **Tanpa animasi MotionPreset**

---

## 3. Keputusan Migrasi

| # | Pertanyaan | Jawaban |
|---|-----------|---------|
| 1 | Card background: light vs dark? | **Dark (`bg-black`)** — exact replica referensi |
| 2 | Jumlah tombol: 2 atau 1? | **1 CTA button** — "Mulai Gratis" + ArrowRightIcon |
| 3 | Gambar dashboard: CDN atau lokal? | **CDN** `shadcnstudio.com` — exact replica |
| 4 | Link navigasi: auth routes atau `#`? | **React Router `Link`** ke register route |
| 5 | Ada package baru? | **Tidak** — semua sudah ada |
| 6 | Ada UI baru ke `shadcn-studio-ui`? | **Tidak** — semua sudah ada |

---

## 4. Package yang Perlu Diinstall

| Package | Alasan | Sudah ada? |
|---------|--------|------------|
| `motion` / `motion/react` | Untuk `MotionPreset` + floating animation | ✅ Sudah ada |
| `lucide-react` | Untuk `ArrowRightIcon` | ✅ Sudah ada |

> 🟢 **Tidak ada package baru yang perlu diinstall.**

---

## 5. UI yang Perlu Disalin

| Komponen | Status | Catatan |
|----------|--------|---------|
| `Button` | ✅ Sudah ada | `@/shared/ui/button` |
| `Card`, `CardContent` | ✅ Sudah ada | `@/shared/ui/card` |
| `MotionPreset` | ✅ Sudah ada | `@/shared/shadcn-studio-ui/motion-preset` |
| `ArrowRightIcon` | ✅ Sudah ada | lucide-react |

> 🟢 **Tidak ada UI baru yang perlu disalin ke `shared/shadcn-studio-ui`.** Semua komponen sudah tersedia.

---

## 6. Rekomendasi Implementasi (Berurutan)

1. **Rewrite `cta-section.tsx`**:
   - Ganti light card → dark card (`bg-black rounded-3xl`, text-white)
   - Tambahkan image section di kiri (2 variant: light `image-7.png` + dark `image-7-dark.png`)
   - Image dengan floating animation via `MotionPreset motionProps`
   - Heading + paragraph white text dengan MotionPreset fade/slide-up staggered
   - 1 Button `variant="secondary"` + ArrowRightIcon dengan `render` prop → Link register
   - Tambahkan `className="dark:hidden"` / `dark:inline-block` untuk image switching
2. **Text content:** adaptasi ke Tablenary value proposition
3. **Responsiveness:** gambar hidden di mobile (`max-sm:hidden`), content full-width

---

## 7. File yang Perlu Dimodifikasi

| File | Perubahan |
|------|-----------|
| `apps/web/src/public/components/cta-section.tsx` | **Rewrite** ke layout cta-section-04 dark card |

> Tidak perlu ubah `types.ts`, `data/`, atau `index.ts` barrel.
