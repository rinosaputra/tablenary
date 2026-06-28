# Contact Page Migration — Observasi & Rencana

> Referensi: `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\contact-us-page-02\` → `E:\tablenary\apps\web\src\public\pages\contact-page.tsx`

---

## 1. Source Component Structure

### 1.1 File di shadcn-studio (source)

| File | Path |
|------|------|
| Page wrapper | `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\pages\contact-us-page-02.tsx` |
| Block utama | `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\contact-us-page-02\contact-us-page-02.tsx` |
| Form sub-component | `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\contact-us-page-02\contact-form.tsx` |

### 1.2 Struktur Source Block

```
contact-us-page-02/
├── contact-us-page-02.tsx   (layout: Card grid 6 cols — col-span-3 info kiri, col-span-3 form kanan)
└── contact-form.tsx         (form stateless, Name + Email row, Subject text input, Message textarea, Send button)
```

**Layout source:**
- Section dengan `bg-muted py-8 sm:py-16 lg:py-24`
- Card utama dengan grid `md:grid-cols-6`
  - **Col 1-3 (info):** Card background `bg-primary`, teks `text-primary-foreground`. Berisi judul "Contact Information", deskripsi, Phone, Email, Address
  - **Col 4-6 (form):** Stateless contact form dengan input Name, Email, Subject (text, bukan select), Message
- Hanya menggunakan: `Card, CardContent, Button, Input, Label, Textarea` dari `@/components/ui/`

---

## 2. Current Target Component Structure

### 2.1 File saat ini di apps/web

| File | Path | Status |
|------|------|--------|
| Page | `E:\tablenary\apps\web\src\public\pages\contact-page.tsx` | ✅ ada |
| ContactForm | `E:\tablenary\apps\web\src\public\components\contact\contact-form.tsx` | ✅ ada |
| ContactInfo | `E:\tablenary\apps\web\src\public\components\contact\contact-info.tsx` | ✅ ada |
| Data | `E:\tablenary\apps\web\src\public\data\contact.ts` | ✅ ada |

### 2.2 Perbedaan Layout

| Aspek | Source (shadcn-studio) | Target (adaCODE/current) |
|-------|----------------------|-------------------------|
| Wrapper | `bg-muted` section | `PageHeader` + plain section |
| Card structure | 1 Card besar, grid 6 col | Grid langsung tanpa card wrapper, `lg:grid-cols-[1fr_380px]` |
| Info panel | Kiri (col 1-3), bg-primary, vertical layout | Kanan (hidden di mobile), bg-default |
| Form | Kanan (col 4-6) | Kiri, full-width |
| Subject field | Text input | NativeSelect (dropdown with options) |
| CTA | Tidak ada | Ada `<CTASection />` setelah form |
| Phone/WhatsApp card | In-card info panel | Extra card below ContactInfo |

### 2.3 Components yang sudah ada dan reusable

**`contact-form.tsx` (current):**
- Stateful: `FormState = "idle" \| "submitting" \| "success"`
- Fields: Name (text), Email (text), Subject (NativeSelect), Message (Textarea)
- Has submission simulation + success state
- Uses: `Button, Input, Label, NativeSelect, Textarea` dari `@/shared/ui/`

**`contact-info.tsx` (current):**
- Displays `contactInfoData` array as cards
- Uses: `Card, CardContent` dari `@/shared/ui/`

**`contact.ts` data:**
- `contactSubjects` — 6 options (general, billing, technical, feedback, partnership, other)
- `contactInfoData` — 3 items (Email, Waktu Respon, Komunitas Discord)
- Tipe: `ContactInfo { icon: string, title: string, content: string, accent: string }`

---

## 3. Package Dependencies Analysis

### 3.1 Sudah terinstall di `apps/web/package.json`

| Package | Versi | Digunakan di source? |
|---------|-------|---------------------|
| `lucide-react` | ^1.21.0 | ✅ `PhoneIcon, MailIcon, MapPinIcon, SendIcon` |
| `motion` | ^12.42.0 | (tidak dipakai source, tapi dipakai CTASection) |
| `@base-ui/react` | ^1.6.0 | ✅ `NativeSelect` (pakai ini) |

### 3.2 Tidak perlu install package baru

Semua依赖 source block sudah tersedia:
- `lucide-react` → icons: `PhoneIcon, MailIcon, MapPinIcon, SendIcon`
- UI components sudah ada di `@/shared/ui/`: `Card, CardContent, Button, Input, Label, Textarea`

### 3.3 NativeSelect note

Source menggunakan `Input` untuk subject (text input), sedangkan current target menggunakan `NativeSelect` (dari `@base-ui/react`) yang sudah terinstall. **Tidak perlu install tambahan.**

---

## 4. UI Components yang Perlu Disalin ke `shared/shadcn-studio-ui`

### 4.1 Mengecek kebutuhan source vs yang sudah ada

Source `contact-us-page-02.tsx` imports:
- `Card, CardContent` dari `@/components/ui/card` → **sudah ada** di `@/shared/ui/card`
- `Button, Input, Label, Textarea` dari `@/components/ui/` → **sudah ada** di `@/shared/ui/`
- `PhoneIcon, MailIcon, MapPinIcon, SendIcon` dari `lucide-react` → **package sudah ada**

### 4.2 Kesimpulan: Tidak perlu copy UI baru

Semua komponen UI yang dipakai source block sudah tersedia di `@/shared/ui/`:
- `card.tsx` ✅
- `button.tsx` ✅
- `input.tsx` ✅
- `label.tsx` ✅
- `textarea.tsx` ✅

**Tidak ada custom UI dari shadcn-studio yang perlu disalin.**

---

## 5. Block yang Perlu Disalin ke `public/components/contact`

### 5.1 Opsi A: Adaptasi langsung (recommended)

Salin logic dari source `contact-form.tsx` sebagai inspirasi, tapi **biarkan current `contact-form.tsx` dan `contact-info.tsx` tetap ada** karena sudah lebih lengkap (stateful, bahasa Indonesia, data lokal).

Yang bisa diadaptasi dari source:
- Layout Card grid 6 columns dengan bg-primary untuk info panel
- Struktur form yang lebih clean (tanpa state management)

### 5.2 Opsi B: Full replace dengan source block

Jika ingin mengganti layout sepenuhnya dengan style shadcn-studio:

**File baru:**
```
E:\tablenary\apps\web\src\public\components\contact\
├── contact-us-page-02.tsx    (block utama, adaptasi dari source)
└── contact-form-client.tsx   (form sub-component, adaptasi dari source)
```

**Struktur yang direncanakan:**
- Section `bg-muted py-8 sm:py-16 lg:py-24`
- Card dengan grid `md:grid-cols-6`
  - Col 1-3: Info panel (bg-primary, text-primary-foreground)
    - "Contact Information" heading
    - Email, Phone, Address (diisi dari `contactInfoData`)
  - Col 4-6: Form
    - Name, Email (row), Subject (select dari `contactSubjects`), Message
    - Send button

---

## 6. Rencana Implementasi

### 6.1 File yang perlu dibuat/diubah

| Aksi | File | Keterangan |
|------|------|------------|
| **UPDATE** | `src/public/pages/contact-page.tsx` | Ganti layout dengan pattern contact-us-page-02 |
| **UPDATE** | `src/public/components/contact/contact-form.tsx` | Sesuaikan dengan layout baru (subject jadi dropdown/select) |
| **UPDATE** | `src/public/components/contact/contact-info.tsx` | Sesuaikan design (bg-primary card) |
| **CREATE** | `src/public/components/contact/contact-info-panel.tsx` | Baru: card dengan bg-primary layout dari source |
| **DELETE** | (opsional) Extra phone card di `contact-page.tsx` | Digabung ke info panel |

### 6.2 Design Pattern yang Diadopsi

```
┌─────────────────────────────────────────────────┐
│  PageHeader ("Hubungi Kami")                     │
├─────────────────────────────────────────────────┤
│  bg-muted section                               │
│  ┌───────────────────────────────────────────┐  │
│  │  Card (border, shadow-none)               │  │
│  │  ┌─────────────┬───────────────────────┐  │  │
│  │  │  Info Panel │    Contact Form       │  │  │
│  │  │  (bg-primary)(col 4-6)             │  │  │
│  │  │  (col 1-3)  │                       │  │  │
│  │  │             │  Nama + Email (row)   │  │  │
│  │  │  Phone      │  Subject (select)     │  │  │
│  │  │  Email      │  Message (textarea)   │  │  │
│  │  │  Address    │  [Kirim Pesan]        │  │  │
│  │  └─────────────┴───────────────────────┘  │  │
│  └───────────────────────────────────────────┘  │
├─────────────────────────────────────────────────┤
│  CTASection                                     │
└─────────────────────────────────────────────────┘
```

### 6.3 Tailwind Classes dari Source yang Akan Dipakai

```tsx
// Section wrapper
<section className='bg-muted py-8 sm:py-16 lg:py-24'>

// Main card
<Card className='border shadow-none'>
  <CardContent className='grid gap-6 md:grid-cols-6'>

// Info panel (primary bg)
<Card className='bg-primary shadow-none md:col-span-3 xl:col-span-2'>
  <CardContent className='text-primary-foreground space-y-7'>

// Form area
<div className='md:col-span-3 xl:col-span-4'>

// Form inputs
<Input className='h-10' />
<Textarea className='h-28 resize-none' />
<Button className='rounded-lg text-base shadow-sm has-[>svg]:px-6'>

// Info items
<div className='flex items-start gap-4 text-lg font-semibold'>
```

### 6.4 Konversi Icon Mapping

| Source | Target |
|--------|--------|
| `PhoneIcon` | `PhoneIcon` (same) |
| `MailIcon` | `MailIcon` (same) |
| `MapPinIcon` | Diganti dengan icon Discord/community sesuai data lokal |
| `SendIcon` | `SendIcon` (same) |

---

## 7. Checklist Sebelum Implementasi

- [ ] Konfirmasi layout: info panel di kiri (bg-primary) vs kanan (seperti sekarang)
- [ ] Konfirmasi: subject field pakai `NativeSelect` (existing) atau text input (source)?
- [ ] Konfirmasi: alamat fisik ditambahkan atau tidak (sumber punya "802 Pension Rd...")?
- [ ] Apakah `ContactInfo` perlu split jadi 2 komponen (info panel + phone card)?
- [ ] Apakah CTASection tetap dipertahankan?

---

## 8. Ringkasan

| Kategori | Hasil |
|----------|-------|
| **Package baru** | ❌ Tidak perlu install apapun |
| **UI baru ke shared** | ❌ Semua UI sudah ada di `@/shared/ui/` |
| **Block baru** | ✅ Adaptasi `contact-us-page-02` ke `public/components/contact/` |
| **File diubah** | ✅ `contact-page.tsx`, `contact-form.tsx`, `contact-info.tsx` |
| **File baru** | ⚠️ Mungkin `contact-info-panel.tsx` (bg-primary card) |
| **Referensi source** | `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\contact-us-page-02\` |
