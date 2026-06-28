# Observasi: Migrasi Pricing Component ke Pricing-Component-05

> Tanggal: 2026-06-28  
> Status: Observasi — belum diimplementasi

---

## 1. Referensi: `pricing-component-05` (shadcn-studio/blocks)

**Sumber:** `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\pricing-component-05\`

### File yang ada:
| File | Deskripsi |
|------|-----------|
| `pricing-component-05.tsx` | Komponen utama — Tabel comparison layout (fitur × plan) |
| `pricing-component-05.tsx` (halaman) | Page wrapper dengan `plans`, `featureKeys`, `featureLabels` |

### Tipe data (`Plan`):
```ts
type Plan = {
  name: string
  price: string          // e.g. "$99", "$199"
  period: string         // e.g. "Per month"
  features: {
    websites: string
    support: string
    database: boolean | string
    bandwidth: boolean | string
    ssd: boolean | string
    email: boolean | string
    wordpress: boolean | string
    backup: boolean | string
    domain: boolean | string
    speed: string
  }
  isPopular?: boolean
}[]
```

### Pola `features`:
- Setiap fitur punya **key** (snake_case) dan **label** (display name)
- Nilai bisa: `true` (✓ icon), `false` (- strip), atau `string` (teks)
- Fitur terakhir (`speed`) berfungsi sebagai CTA row

### Struktur layout:
- **Full-width Table** (`<Table>` shadcn) dengan:
  - **Header:** kolom plan — nama + harga + periode
  - **Baris fitur:** label fitur di kolom pertama, nilai di setiap kolom plan
  - Popular plan punya highlight (`bg-primary` di header, `bg-primary rounded-b-lg` di row terakhir CTA)

### Dependencies UI yang dipakai:
- `Table`, `TableBody`, `TableCell`, `TableHead`, `TableHeader`, `TableRow` (dari `@/components/ui/table`)
- `CircleCheckIcon` (lucide-react)
- `cn` (dari `@/lib/utils`)

---

## 2. Komponen Saat Ini: `pricing-component.tsx`

**Lokasi:** `E:\tablenary\apps\web\src\public\components\pricing-component.tsx`

### Pola saat ini:
- **Card-based layout** — 3 Cards berdampingan (Free / Pro / Team)
- **Badge "Populer"** di card atas
- **Feature list** menggunakan `<ul>` + `<CheckIcon>`
- **CTA Button** per card
- IDR currency format (`formatIDR()`)
- Tahunan only (`/tahun` label)
- **Tanpa animasi**

### Data tipe (`PricingPlan`):
```ts
interface PricingPlan {
  name: string
  description: string
  monthlyPrice: number
  annualPrice: number
  features: string[]
  popular?: boolean
  cta: string
}
```

### Perbandingan layout:
| Aspek | Sekarang (Card) | Baru (Table Comparison) |
|-------|----------------|-------------------------|
| Layout | 3 Cards berdampingan | Tabel perbandingan fitur |
| Fitur | List dengan checkmark | Baris per fitur, ✓/−/teks per kolom |
| Popular highlight | Ring + Badge | Background primary di header + rounded-bottom |
| CTA | Button per card | Text link di row terakhir |
| Header | Nama + deskripsi + harga | Nama + harga + periode |
| Data | `features: string[]` | `features: Record<string, bool|string>` |

---

## 3. Package yang Perlu Diinstall

| Package | Alasan | Sudah ada? |
|---------|--------|------------|
| `@base-ui/react/table` (table components) | `<Table>`, `<TableRow>`, dll dari shadcn-table | ✅ **Sudah diinstall** (user konfirmasi) |

> 🟢 **Tidak ada package baru yang perlu diinstall.**

---

## 4. UI yang Perlu Disalin ke `shared/shadcn-studio-ui`

### Yang SUDAH ada:
| Komponen | Status |
|----------|--------|
| `cn` (utils) | ✅ Sudah ada di `@/shared/lib/utils` |
| `Badge` | ✅ Sudah ada di `@/shared/ui/badge` |
| `Button` | ✅ Sudah ada di `@/shared/ui/button` |
| `Card`, `CardContent` | ✅ Sudah ada di `@/shared/ui/card` |
| `Separator` | ✅ Sudah ada di `@/shared/ui/separator` |
| `CheckIcon` | ✅ Lucide — package dasar |
| `CircleCheckIcon` | ✅ Lucide — package dasar |

### Yang SUDAH ada di `shared/ui/`:
| Komponen | Lokasi |
|----------|--------|
| `Table`, `TableBody`, `TableCell`, `TableHead`, `TableHeader`, `TableRow` | `@/shared/ui/table` |

> 🟢 **Tidak ada UI baru yang perlu disalin ke `shared/shadcn-studio-ui`.** Semua komponen sudah tersedia.

---

## 5. File yang Perlu Dimodifikasi

| File | Perubahan |
|------|-----------|
| `apps/web/src/public/components/pricing-component.tsx` | **Rewrite** ke layout Table comparison |
| `apps/web/src/public/data/pricing.ts` | **Replace** dari `PricingPlan[]` ke `Plan` format dengan features keyed |
| `apps/web/src/public/types.ts` | **Tambah** tipe `PricingComparisonPlan` untuk data perbandingan |

---

## 6. Mapping Data: `PricingPlan` → `PricingComparisonPlan`

Data Tablenary (Free/Pro/Team) perlu dipetakan ke pola fitur:

```ts
type PricingComparisonPlan = {
  name: string
  price: string        // formatIDR(annualPrice)
  period: string       // "/tahun"
  features: Record<string, boolean | string>
  isPopular?: boolean
}
```

**Fitur-fitur yang cocok untuk tabel perbandingan:**

| Key | Label | Free | Pro | Team |
|-----|-------|------|-----|------|
| `tableBuilder` | Table Builder | ✅ | ✅ | ✅ |
| `formBuilder` | Form Builder | ✅ | ✅ | ✅ |
| `chartBuilder` | Chart Builder | ✅ | ✅ | ✅ |
| `localData` | Offline (IndexedDB) | ✅ | ✅ | ✅ |
| `pdfBuilder` | PDF Builder | − | ✅ | ✅ |
| `cloudSync` | Cloud Sync | − | ✅ | ✅ |
| `importExcel` | Import Excel/CSV | − | ✅ | ✅ |
| `realtimeCollab` | Real-time Collaboration | − | − | ✅ |
| `adminControls` | Admin Controls | − | − | ✅ |
| `auditLog` | Audit Log | − | − | ✅ |
| `prioritySupport` | Priority Email Support | − | ✅ | ✅ |
| `dedicatedManager` | Dedicated Success Manager | − | − | ✅ |
| `slaGuarantee` | SLA 99.9% Uptime | − | − | ✅ |

> 💡 **Keputusan:** Menggunakan fitur-fitur Tablenary asli, bukan fitur hosting (websites, database, bandwidth, SSD).

---

## 7. Rekomendasi Implementasi (Berurutan)

1. **Buat tipe baru** di `types.ts` — `PricingComparisonPlan` dengan features keyed
2. **Update `pricing.ts`** — konversi data ke format Table comparison
3. **Rewrite `pricing-component.tsx`** ke layout Table:
   - Header: kolom plan (nama + harga + periode)
   - Body: baris per fitur
   - Popular plan highlight (`bg-primary` header, `rounded-b-lg` row CTA)
   - `CircleCheckIcon` untuk true, `-` untuk false, teks untuk string
   - Row terakhir: CTA text (`speed` feature key)
4. **Ganti `formatIDR`** — harga dalam IDR dengan format `$XX.XXX`
5. **Update `index-page.tsx`** — pastikan tidak ada import yang break
6. **Update `pricing-page.tsx`** — pastikan tidak ada import yang break

---

## 8. Pertanyaan — Dijawab ✅

| # | Pertanyaan | Jawaban |
|---|-----------|---------|
| 1 | Layout: card atau table comparison? | **Table comparison** (exact replica pricing-component-05) |
| 2 | Data: pakai `PricingPlan` lama atau buat mapping baru? | **Mapping baru** ke `PricingComparisonPlan` dengan keyed features |
| 3 | Fitur: hosting-style (websites, database) atau Tablenary features? | **Tablenary features** asli (Table Builder, Form Builder, PDF Builder, dll) |
| 4 | Currency: USD atau IDR? | **IDR** (`formatIDR`) |
| 5 | Ada package baru? | **Tidak** — Table UI sudah diinstall |
| 6 | Ada UI baru ke `shadcn-studio-ui`? | **Tidak** — Table sudah di `shared/ui/table` |

---

## 9. Rencana Implementasi (Updated)

1. Tambah tipe `PricingComparisonPlan` di `apps/web/src/public/types.ts`
2. Konversi `apps/web/src/public/data/pricing.ts` → keyed features format
3. Rewrite `apps/web/src/public/components/pricing-component.tsx`:
   - Hapus Card-based layout + ul/li feature list
   - Ganti dengan `<Table>` comparison layout
   - Header: kolom plan (nama + IDR harga + "/tahun")
   - Body: baris per fitur (CheckIcon ✓, - strip, teks)
   - Popular highlight: `bg-primary` header, `bg-primary rounded-b-lg` row CTA
   - CTA row terakhir sebagai teks link
4. Pastikan import tetap jalan di `index-page.tsx` dan `pricing-page.tsx`
