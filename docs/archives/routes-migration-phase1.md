# Migrasi ke react-router-typesafe-routes

**Tanggal:** 2026-06-27  
**Library:** `react-router-typesafe-routes`  
**Status:** Phase 1 selesai (definisi rute + config)

---

## Apa yang sudah dilakukan

### 1. Definisi Rute (`src/routes/route-definitions.ts`)
Buat file baru berisi tree hierarki rute:
- `publicRoutes` → pathless root dengan anak: `index`, `login`, `register`
- `appRoutes` → `path: "app"` dengan anak: `index`, `settings` (anak: `index`, `profile`)
- Export flat `paths` untuk akses ergonomis: `paths.public.$.login.$buildPath()`

### 2. Konfigurasi Router (`src/routes/routes-config.tsx`)
Migrate path string literal ke `$path()`:
- `createBrowserRouter` sekarang pakai `paths.public.$path()` dan `paths.app.$path()`
- Anak-anak route pakai `$path({ relative: true })`

### 3. Migrasi Navigasi (`<Link to="...">` → `$buildPath()`)
File yang sudah di-migrate:
- ✅ `src/modules/landing/components/cta-section.tsx`
- ✅ `src/modules/auth/layout/login-form.tsx`
- ✅ `src/modules/auth/layout/register-form.tsx`
- ✅ `src/shared/layout/public/public-header.tsx`
- ✅ `src/shared/layout/public/public-footer.tsx`
- ✅ `src/shared/layout/app/app-sidebar.tsx`

Verifikasi: `tsc --noEmit` ✅, `pnpm lint` ✅

---

## Yang masih perlu di-migrate (next steps)

Setelah Anda memberi perintah lanjutan, lakukan:

### A. Sidebar navigasi (`src/shared/layout/app/`)
Semua file ini punya `<Link to="...">` atau prop URL:
- `nav-main.tsx` — `<Link to={item.url} />` pada `SidebarMenuButton` & `SidebarMenuSubButton`
  - Perlu migrasi: ambil `url` dari `appSidebarData` agar sesuai `$buildPath()`
- `nav-projects.tsx` — `<Link to={item.url} />` pada `SidebarMenuButton`
  - Perlu migrasi: ambil `url` dari data `projects`
- `nav-secondary.tsx` — cek apakah ada `<Link>`
- `sidebar-data.ts` — ganti string URL hardcoded dengan `$buildPath()` dari `paths`
- `types.ts` (di dalam folder `app/`) — sesuaikan tipe jika ada field `url: string` → jadi tipe aman

### B. Header aplikasi (`src/shared/layout/app/site-header.tsx`)
- Saat ini hanya ada `GitHub` link (external, tidak perlu migrasi)
- Tidak ada `<Link to="/">` internal yang perlu diubah

### C. File lain yang mengandung `<Link>`
Run: `grep -rn 'to="' src/` untuk memastikan tidak ada yang terlewat.  
Sampai saat ini sudah diverifikasi tidak ada `to="/..."` tersisa di `.tsx`.

### D. Penggunaan `href` bukan `to`
- Cek apakah ada komponen `SidebarMenuButton`/`DropdownMenuItem` yang menggunakan `href` string
- Migrasi juga ke `$buildPath()`

---

## Pola yang digunakan

```ts
// Import
import { paths } from "@/routes/route-definitions";

// Absolute path (untuk browser URL bar)
const url = paths.public.$.login.$path(); // "/login"

// Build path (untuk <Link to={...}>)
<Link to={paths.public.$.register.$buildPath()}>Register</Link>

// Relative path (untuk React Router child routes)
{ path: paths.public.$.login.$path({ relative: true }) } // "login"
```

## Convention

- **Semua** path internal menggunakan `$buildPath()` dari `paths`
- **Jangan** pakai string literal `"/login"` atau `"#/dashboard"` di `<Link to="...">`
- Untuk link eksternal (GitHub, YouTube, dll.) tetap pakai `href` biasa
- Data sidebar/project harus mengambil URL dari `paths.$buildPath()`, bukan string hardcoded
