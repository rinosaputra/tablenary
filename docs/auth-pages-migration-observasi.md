# Auth Pages Migration — Observasi & Rencana

> Sumber: `E:\shadcn-ui-studio\nextjs\components\shadcn-studio\blocks\login-page-02\` + `register-02\`
> Target: `E:\tablenary\apps\web\src\auth\pages\` + `components\`

---

## 1. Source Components (Shadcn Studio)

### 1.1 Struktur Blok

```
login-page-02/
├── login-page-02.tsx   ← layout utama (split screen 6 kolom)
└── login-form.tsx      ← form sub-component

register-02/
├── register-02.tsx     ← layout utama (split screen 6 kolom)
└── register-form.tsx   ← form sub-component
```

### 1.2 Layout Pattern — `login-page-02.tsx` / `register-02.tsx`

```
┌──────────────────────────────────────────────────────────┐
│                    h-dvh (full viewport)                 │
│  lg:grid lg:grid-cols-6                                 │
├──────────────────────┬───────────────────────────────────┤
│  Dashboard Preview    │  Auth Form Side                   │
│  (hidden di mobile)   │                                   │
│  lg:col-span-3        │  lg:col-span-3                    │
│  xl:col-span-4        │  xl:col-span-2                    │
│                       │                                   │
│  ┌─────────────────┐  │  Back to website link             │
│  │  BorderBeam     │  │  Logo (Tablenary)                 │
│  │  card image     │  │  Heading + subtitle               │
│  │  + bg shape     │  │  Quick login buttons (optional)   │
│  │                 │  │  Form (email/password/etc)        │
│  │                 │  │  Divider + social button          │
│  └─────────────────┘  │  Links cross-page                 │
└──────────────────────┴───────────────────────────────────┘
```

**Classes kunci dari source:**
```tsx
// Container
<h-dvh lg:grid lg:grid-cols-6>

// Preview side (kiri)
lg:col-span-3 xl:col-span-4
bg-muted relative z-1 flex h-full items-center justify-center px-6
outline-border rounded-[20px] p-2.5 outline-2 -outline-offset-[2px]

// Form side (kanan)
flex h-full flex-col items-center justify-center py-10 sm:px-5
lg:col-span-3 xl:col-span-2
w-full max-w-md px-6

// Form elements
space-y-4
<Input className='h-10' />
<Textarea className='h-28 resize-none' />
<Button className='w-full' />
<Button variant='outline' />
<Button variant='ghost' size='icon' />

// Password toggle
relative pr-9 → Input + Button absolute inset-y-0 right-0
```

### 1.3 LoginForm Source (login-page-02)

```tsx
fields: Email, Password (with show/hide toggle)
controls: Remember Me checkbox + Forgot Password link
submit: "Sign in to Shadcn Studio"
alternatives: Quick login buttons (User/Admin), Separator, "Sign in with google" (ghost)
```

**Imports:** `Button, Checkbox, Input, Label` dari `@/components/ui/`

### 1.4 RegisterForm Source (register-02)

```tsx
fields: Username, Email, Password (show/hide), Confirm Password (show/hide)
controls: Privacy policy checkbox
submit: "Sign Up to Shadcn Studio"
alternatives: Separator, "Sign in with google" (ghost)
```

**Imports:** `Button, Checkbox, Input, Label` dari `@/components/ui/`

### 1.5 Komponen Khusus Source

| Komponen | Lokasi Source | Di Kita Ada? |
|----------|--------------|---------------|
| `BorderBeam` | `@/components/ui/border-beam` | ✅ `@/shared/shadcn-studio-ui/border-beam.tsx` |
| `Logo` (shadcn studio) | `@/components/shadcn-studio/logo` | ❌ Pakai `TablenaryLogo` di `@/shared/ui/tablenary-logo.tsx` |
| `AuthFullBackgroundShape` | `@/assets/svg/auth-full-background-shape` | ❌ Tidak ada di studio, tidak perlu ( decorative bg shape) |
| Dashboard image CDN | `cdn.shadcnstudio.com/ss-assets/blocks/marketing/auth/image-1.png` | ❌ Perlu ganti asset kita sendiri |

---

## 2. Target Saat Ini

### 2.1 File eksisting

| File | Path | Keterangan |
|------|------|------------|
| Page | `src/auth/pages/login-page.tsx` | Wraps LoginForm dalam AuthLayout |
| Page | `src/auth/pages/register-page.tsx` | Wraps RegisterForm dalam AuthLayout |
| Form | `src/auth/components/login-form.tsx` | Card split 2 col, Field components, social buttons |
| Form | `src/auth/components/register-form.tsx` | Card split 2 col, Field components, social buttons |
| Layout | `src/auth/layout/auth-layout.tsx` | Simple centered layout (min-h-svh, bg-muted) |
| Layout | `src/auth/layout/auth-page-layout.tsx` | Title+subtitle wrapper |
| Layout | `src/auth/layout/types.ts` | Type defs |

### 2.2 LoginForm (existing)

```tsx
- "client" directive
- Card overflow-hidden, grid md:grid-cols-2
- Kolom kiri: form dengan FieldGroup, Field, FieldLabel, FieldDescription, FieldSeparator
- Kolom kanan: hidden di mobile, bg-muted, placeholder image
- Social login: Apple, Google, Meta (3 icon buttons grid grid-cols-3)
- Cross links: "Don't have an account? Sign up" (Link to register)
- Footer: "By clicking continue, you agree to Terms of Service + Privacy Policy"
```

### 2.3 RegisterForm (existing)

Sama pola dengan LoginForm + tambahan field Confirm Password (grid grid-cols-2).

### 2.4 AuthLayout (existing)

```tsx
<div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
  <div className="w-full max-w-sm md:max-w-4xl">{children}</div>
</div>
```

**Tanpa header/footer** — sesuai kebutuhan auth pages.

---

## 3. Package Dependencies

### 3.1 Semua sudah terinstall

| Package | Status |
|---------|--------|
| `lucide-react` | ✅ (`EyeIcon, EyeOffIcon, ChevronLeftIcon`) |
| `motion` | ✅ (`motion/react` untuk `BorderBeam`) |
| `@base-ui/react` | ✅ (`Checkbox`, dll) |
| `class-variance-authority` | ✅ (untuk Button variants) |

### 3.2 Tidak perlu install package baru

Semua dependency source sudah tersedia:
- `BorderBeam` → sudah ada di `@/shared/shadcn-studio-ui/border-beam`
- `Checkbox` → sudah ada di `@/shared/ui/checkbox`
- `Separator` → sudah ada di `@/shared/ui/separator`
- `Button/Input/Label` → sudah ada di `@/shared/ui/`

---

## 4. UI yang Perlu Disalin ke `shared/shadcn-studio-ui`

| Komponen | Status |
|----------|--------|
| `border-beam.tsx` | ✅ Sudah ada |
| `motion-preset.tsx` | ✅ Sudah ada |
| `marquee.tsx` | ✅ Sudah ada |
| `rating.tsx` | ✅ Sudah ada |

**Tidak perlu copy UI baru.** Semua yang dipakai source sudah ada.

---

## 5. Rencana Implementasi

### 5.1 File yang Perlu Dibuat/Ulang

| Aksi | File | Keterangan |
|------|------|------------|
| **REPLACE** | `src/auth/components/login-form.tsx` | Adaptasi dari source `login-page-02/login-form.tsx` |
| **REPLACE** | `src/auth/components/register-form.tsx` | Adaptasi dari source `register-02/register-form.tsx` |
| **CREATE** | `src/auth/components/auth-dashboard-preview.tsx` | Baru: split-left dashboard panel (image + BorderBeam + bg shape) |
| **UPDATE** | `src/auth/layout/auth-layout.tsx` | Replace: dari simple centered → full split-screen grid layout |
| **UPDATE** | `src/auth/pages/login-page.tsx` | Simplify: langsung render split layout via AuthLayout |
| **UPDATE** | `src/auth/pages/register-page.tsx` | Simplify: langsung render split layout via AuthLayout |

### 5.2 Detail Perubahan Per File

#### `auth-layout.tsx` — FULL REPLACE

Dari layout simple centered menjadi **split-screen grid**:

```tsx
// OLD
<div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
  <div className="w-full max-w-sm md:max-w-4xl">{children}</div>
</div>

// NEW
<div className="h-dvh lg:grid lg:grid-cols-6">
  {/* Left: Dashboard Preview (hidden mobile, col-span-3/4) */}
  <div className="max-lg:hidden lg:col-span-3 xl:col-span-4">
    <AuthDashboardPreview />
  </div>
  
  {/* Right: Form Content (col-span-3/2) */}
  <div className="flex h-full flex-col items-center justify-center py-10 sm:px-5 lg:col-span-3 xl:col-span-2">
    <div className="w-full max-w-md px-6">
      {children}
    </div>
  </div>
</div>
```

#### `auth-dashboard-preview.tsx` — FILE BARU

Component untuk sisi kiri (dashboard preview panel):

```tsx
// Content:
// 1. Card dengan border outline + rounded-[20px]
// 2. Image (CDN placeholder → ganti dengan asset Tablenary)
// 3. BorderBeam overlay
// 4. Background shape (SVG decoration)
```

**Asset decision:** Gambar dashboard dari source menggunakan CDN `shadcnstudio.com`. Untuk Tablenary, gunakan:
- Placeholder image sementara, ATU
- Screenshot asli Tablenary dashboard bila tersedia

#### `login-form.tsx` — ADAPTASI

Dari source `login-page-02/login-form.tsx`:

```tsx
// Fields: Email, Password (eye toggle)
// Extras: Remember Me checkbox, Forgot Password link
// Submit: full-width primary button
// Alternatives: Divider + "Sign in with google" ghost button
// Cross link: "New on our platform? Create an account" → paths.auth.$.register
```

**Bahasa:** Indonesian (sesuai brand Tablenary)

#### `register-form.tsx` — ADAPTASI

Dari source `register-02/register-form.tsx`:

```tsx
// Fields: Username, Email, Password (toggle), Confirm Password (toggle)
// Extras: Privacy policy checkbox
// Submit: full-width primary button
// Alternatives: Divider + "Sign in with google" ghost button
// Cross link: "Already have an account? Sign in" → paths.auth.$.login
```

#### `login-page.tsx` & `register-page.tsx` — SIMPLIFY

Kedua page saat ini hanya wraps form dalam `AuthLayout`. Tetap sama setelah layout update:

```tsx
// login-page.tsx
export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <BackToSiteLink />
        <TablenaryLogo className="..." />
        <PageHeading title="Selamat Datang Kembali" subtitle="Login ke akun Tablenary Anda" />
        <LoginForm />
        <CrossPageLink
          text="Belum punya akun?"
          href={paths.auth.$.register.$buildPath({})}
          label="Buat akun"
        />
        <SocialDivider />
        <GoogleSignInButton />
      </div>
    </AuthLayout>
  );
}
```

### 5.3 Sub-Components yang Perlu Dibuat

| Component | Purpose |
|-----------|---------|
| `BackToSiteLink` | ChevronLeft + "Back to website" link (top-left of form side) |
| `AuthPageHeading` | Title (h2) + subtitle paragraph |
| `SocialDivider` | `Separator | "or" | Separator` |
| `GoogleSignInButton` | Ghost button "Sign in with Google" |
| `CrossPageLink` | "X punya akun? Y" text + link |
| `AuthDashboardPreview` | Full dashboard panel (image + BorderBeam + bg) |

### 5.4 Tailwind Classes Utama dari Source

```tsx
// Split screen container
'h-dvh lg:grid lg:grid-cols-6'

// Dashboard preview (left)
'max-lg:hidden lg:col-span-3 xl:col-span-4'
'bg-muted relative z-1 flex h-full items-center justify-center px-6'
'rounded-[20px] p-2.5 outline-2 -outline-offset-[2px]'

// Form side (right)
'flex h-full flex-col items-center justify-center py-10 sm:px-5 lg:col-span-3 xl:col-span-2'
'w-full max-w-md px-6'

// Form spacing
'space-y-4' (form fields)
'space-y-6' (page-level wrapper)

// Buttons
'w-full' (primary submit)
'variant="outline"' (social/apple buttons)
'variant="ghost" size="icon"' (password toggle)
'variant="ghost" className="w-full"' (google sign in)

// Password field
'relative pr-9' → Input + Button absolute inset-y-0 right-0

// Separator divider
'flex items-center gap-4'
'Separator className="flex-1"'
```

### 5.5 Cross-Reference: `field.tsx` Usage

Existing `login-form.tsx` dan `register-form.tsx` memakai `Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator` dari `@/shared/ui/field`. 

Source `login-page-02` **tidak** menggunakan field components — langsung pakai `Label` + `Input` + `div`.

**Rekomendasi:** Gunakan approach source (langsung Label+Input) agar lebih sederhana, tidak perlu Field wrapper.

---

## 6. Checklist Sebelum Implementasi

- [ ] **Konfirmasi:** Split-screen layout (dashboard kiri + form kanan) vs current card-centered
- [ ] **Konfirmasi:** Quick login buttons (User/Admin) — source punya, Tablenary mungkin tidak perlu
- [ ] **Konfirmasi:** Social login buttons (Apple/Google/Meta) — sumber punya 3, register punya 1 (Google)
- [ ] **Konfirmasi:** Bahasa form — Indonesian penuh?
- [ ] **Konfirmasi:** Asset dashboard image — pakai placeholder, CDN, atau screenshot Tablenary?
- [ ] **Konfirmasi:** AuthLayout apakah tetap dipakai atau direct render?
- [ ] **Decision:** `AuthPageLayout` (title+subtitle wrapper) apakah masih dibutuhkan?
- [ ] **Konfirmasi:** `types.ts` tetap ada tapi dipindah dari `layout/types.ts` → `auth/types.ts` (root level)
- [ ] **Decision:** Pindah `layout/types.ts` → `auth/types.ts` agar lebih flat, akses `@/auth/types` langsung

---

## 7. Ringkasan Perbandingan

| Aspek | Current (existing) | Source (shadcn-studio) |
|-------|-------------------|----------------------|
| **Layout** | Centered Card, 2-col grid | Full-viewport split (h-dvh, 6-col grid) |
| **Visual** | Clean form + social icons | Dashboard preview + form |
| **Form fields** | Email + Password (login), Email + Pass+Confirm (register) | Email + Password (login), Username + Email + Pass + Confirm (register) |
| **Password UX** | Tidak ada toggle | Eye icon toggle |
| **Extras** | Field wrapper, social buttons (Apple/Google/Meta) | Remember Me, Forgot Password, quick login buttons |
| **BorderBeam** | Tidak ada | Ada di dashboard card |
| **Social** | 3-platform (Apple/Google/Meta) | 1-platform (Google ghost button) |
| **Typography** | English | English |

---

## 8. Kesimpulan

| Kategori | Hasil |
|----------|-------|
| **Package baru** | ❌ Tidak perlu |
| **UI baru ke shared** | ❌ Semua sudah ada (BorderBeam, Checkbox, Separator, dll) |
| **File baru** | ✅ `auth-dashboard-preview.tsx`, sub-components |
| **File diganti** | ✅ `login-form.tsx`, `register-form.tsx`, `auth-layout.tsx` |
| **File simplifikasi** | ✅ `login-page.tsx`, `register-page.tsx` |
| **File bisa dihapus** | ⚠️ `auth-page-layout.tsx`, `layout/types.ts` (pindah ke `auth/types.ts`) |
| **Referensi source** | `blocks/login-page-02/` + `blocks/register-02/` |
