# Landing Page — Content Decisions

**Created:** 2026-06-27
**Status:** Decisions confirmed, ready to implement
**Module:** `apps/web/src/modules/landing/`

## Product Positioning

**Tablenary** adalah aplikasi **no-code data toolkit** dengan 4 builder:

1. **Table Builder** — kelola data tabular (seperti Excel/Sheets)
2. **Form Builder** — input data via form, terhubung ke Table Builder
3. **Chart Builder** — visualisasi data dari Table Builder
4. **PDF Builder** — output dari Table / Chart / Mail Merge data Table ke PDF

**Storage:** **IndexedDB** (lokal, offline-first)
**Online:** Hanya untuk pengguna berbayar (cloud sync)

## Target Audience

- **User kantoran** yang biasa pakai **Excel / Google Sheets**
- Bukan untuk restaurant/UMKM spesifik — positioning diubah dari placeholder "restaurant management"

---

## HeroSection

| Field           | Value                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Headline**    | `Toolkit data tanpa coding. Bangun tabel, kumpulkan via form, visualisasikan dengan chart, ekspor ke PDF — semua offline, data di IndexedDB.` |
| **Subheadline** | `No-code data toolkit. Online hanya untuk pengguna berbayar.`                                                                                 |
| **Badge**       | `Offline-first`                                                                                                                               |
| **CTA Button**  | `Coba Sekarang` → `#features` (scroll, bukan redirect)                                                                                        |
| **Image**       | `/placeholder.svg` (placeholder dulu)                                                                                                         |

## LogoCloud

- Gunakan partner logo placeholder dengan icon `Building2Icon` (sudah dipakai)
- Tidak spesifik industri

## FeaturesSection

- **Tetap generik** (tidak spesifik 4 builder) — 6 generic features yang sudah ada
- Highlight "Offline & Private" sebagai salah satu feature card (existing `ShieldIcon`)

## Testimonials

- Ganti persona ke **office workers**: admin/finance/HR/peneliti
- Tetap 5 testimonial, ganti nama & role

## PricingComponent

| Tier     | Price                      | Features                                   |
| -------- | -------------------------- | ------------------------------------------ |
| **Free** | Rp 0                       | Semua builder kecuali PDF Builder          |
| **Pro**  | Rp 199rb/bln (annual only) | Semua builder termasuk PDF + Cloud sync    |
| **Team** | Rp 599rb/bln (annual only) | Pro + Real-time collaboration (multi-user) |

**Annual only** (toggle bulanan/tahunan tidak dipakai — langsung tampilkan harga tahunan).

Tambahkan harga tier sebagai `annualPrice`, `monthlyPrice` di-skip atau set 0 untuk konsistensi tipe (atau refactor tipe `PricingPlan` untuk annual-only).

## FAQSection

Topik yang harus ada:

1. **Apa itu Tablenary?** — Definisi + 4 builder
2. **Dimana data saya disimpan?** — IndexedDB (lokal), bukan cloud
3. **Apakah data saya aman & privat?** — Tidak dikirim ke server tanpa izin
4. **Apakah butuh internet?** — Tidak, semua jalan offline. Online hanya untuk sinkronisasi
5. **Bisakah import dari Excel/CSV/Google Sheets?** — Ya
6. **Apa limitasi aplikasi offline?** — Tidak ada kolab real-time & cloud sync di Free
7. **Berapa harga?** — Free / Pro / Team tiers
8. **Ada free trial?** — Ya, Pro bisa dicoba 14 hari gratis
9. **Bagaimana dukungan teknis?** — Email + community forum

## CTASection

- Ganti fake "Apple/Mobile" store badges dengan **2 tombol**:
  - `Mulai Gratis` → `/register`
  - `Masuk` → `/login`
- Heading: `Siap kelola data Anda tanpa coding?`
- Sub: `Mulai gratis hari ini. Tanpa kartu kredit.`

## Animations

- Pakai **MotionPreset** dengan **subtle fade-in** saat scroll untuk setiap section
- File: `apps/web/src/shared/shadcn-studio-ui/motion-preset.tsx` (sudah ada)

---

## File Changes Plan

1. **data/features.ts** — keep generic, no change
2. **data/faqs.ts** — rewrite 6-9 FAQ items sesuai topik di atas
3. **data/pricing.ts** — annual-only, 3 tier Free/Pro/Team dengan IDR
4. **data/testimonials.ts** — ganti ke office worker persona
5. **data/logos.ts** — no change
6. **components/hero-section.tsx** — update headline, badge, CTA link ke `#features`
7. **components/cta-section.tsx** — ganti store badges ke register/login buttons
8. **components/pricing-component.tsx** — hapus toggle bulanan/tahunan, tampilkan annual only
9. **(Opsional)** Wrap setiap section dengan `<MotionPreset fade>` untuk animasi

## Pricing Data Type Refactor

`PricingPlan` interface di `types.ts` saat ini punya `monthlyPrice` & `annualPrice`. Karena kita pakai annual-only, ada 2 opsi:

- **Opsi A**: Set `monthlyPrice` = 0 atau sama dengan annual, hide toggle di UI
- **Opsi B**: Refactor type jadi `price: number` + `period: "month" | "year"`

**Rekomendasi**: Opsi A (minimal change, tidak refactor type).

## Komposisi Final Landing Page

```
PublicLayout (header + footer)
└── "/" (IndexPage)
    ├── HeroSection        # Toolkit data tanpa coding
    ├── LogoCloud          # Partner logos
    ├── FeaturesSection    # 6 generic features
    ├── Testimonials       # Office workers
    ├── PricingComponent   # Free / Pro / Team
    ├── FAQSection         # 6-9 FAQ sesuai topik di atas
    └── CTASection         # Mulai Gratis + Masuk
```

## Next Steps

1. Update [data/features.ts](apps/web/src/modules/landing/data/features.ts) — no change needed
2. Update [data/faqs.ts](apps/web/src/modules/landing/data/faqs.ts)
3. Update [data/pricing.ts](apps/web/src/modules/landing/data/pricing.ts)
4. Update [data/testimonials.ts](apps/web/src/modules/landing/data/testimonials.ts)
5. Update [components/hero-section.tsx](apps/web/src/modules/landing/components/hero-section.tsx)
6. Update [components/cta-section.tsx](apps/web/src/modules/landing/components/cta-section.tsx)
7. Update [components/pricing-component.tsx](apps/web/src/modules/landing/components/pricing-component.tsx)
8. (Opsional) Wrap sections dengan MotionPreset
9. Commit dengan conventional commit message
