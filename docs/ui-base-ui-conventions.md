# UI Component Conventions — Base UI

**Status:** Active (since 2026-06-27)  
**Applies to:** `apps/web/src`

## Ringkasan

Project ini menggunakan **shadcn/ui preset berbasis Base UI** (`@base-ui/react/*`), **bukan Radix UI**. Implikasi utamanya: API polymorphism untuk render-as-child memakai pola `render={...}` bukan `asChild`.

Package terkait (lihat `apps/web/components.json`):

- `base-ui` → `@base-ui/react/*`
- `class-variance-authority` (CVA) → variants
- `tailwind-merge` + `clsx` (via `cn()` di `@/shared/lib/utils`) → merging

## Aturan: Polymorphism

### ❌ Jangan Pakai `asChild` (Radix-style)

```tsx
// SALAH — ini pola Radix UI, tidak berlaku untuk Base UI
<Button asChild>
  <a href="#features">Coba Sekarang</a>
</Button>
```

### ✅ Pakai `render={(props) => ...}` (Base UI)

```tsx
// BENAR — pola Base UI
<Button render={(props) => <a href="#features" {...props} />}>
  Coba Sekarang
</Button>
```

## Aturan Detail

1. **Hapus `asChild`** dari komponen utama.
2. **Child element dijadikan self-closing** di dalam atribut `render={...}`.
3. **Sebar `props`** (`{...props}`) di child element agar `className`, event handlers, dan atribut internal `Button` (seperti `data-slot`, `aria-*`) tetap diterapkan Base UI.
4. **Konten teks/ikon** tetap di antara tag pembuka & penutup komponen utama.
5. **Atribut navigasi** (`href` di `<a>`, `to` di `<Link>`) tetap di child element.
6. **Atribut styling komponen utama** (`variant`, `size`, `className` tambahan) tetap di komponen utama — Base UI akan menggabungkannya otomatis.

## Contoh Konversi per Tag

### `Button` → `<a>` (external anchor / page anchor)

```tsx
// Sebelum
<Button size="lg" variant="default" asChild>
  <a href="#features">Coba Sekarang</a>
</Button>

// Sesudah
<Button
  size="lg"
  variant="default"
  render={(props) => <a href="#features" {...props} />}
>
  Coba Sekarang
</Button>
```

### `Button` → `<Link>` (React Router)

```tsx
import { Link } from "react-router";

// Sebelum
<Button size="lg" variant="default" className="min-w-45" asChild>
  <Link to={paths.public.$.register.$buildPath()}>Mulai Gratis</Link>
</Button>

// Sesudah
<Button
  size="lg"
  variant="default"
  className="min-w-45"
  render={(props) => (
    <Link to={paths.public.$.register.$buildPath()} {...props} />
  )}
>
  Mulai Gratis
</Button>
```

### `Button` → `<a>` dengan konten tambahan (icon di akhir)

```tsx
// Sebelum
<Button variant="outline" size="lg" asChild>
  <a href="#features">
    See all features
    <ArrowRightIcon />
  </a>
</Button>

// Sesudah
<Button
  variant="outline"
  size="lg"
  render={(props) => <a href="#features" {...props} />}
>
  See all features
  <ArrowRightIcon />
</Button>
```

## Bentuk Lanjutan: `render` dengan State

Untuk komponen yang memerlukan akses ke state internal (mis. `Menu`, `Dialog`, `Popover` yang butuh status `open`), gunakan bentuk callback dua-argumen:

```tsx
<DialogTrigger
  render={(props, state) => (
    <Button {...props} variant={state.open ? "secondary" : "default"}>
      {state.open ? "Tutup" : "Buka"}
    </Button>
  )}
/>
```

State shape bervariasi per komponen — lihat type `*.State` di `@base-ui/react/<component>`.

## Deteksi Migrasi yang Belum Selesai

Tooling untuk audit:

```bash
# Scan semua .tsx di apps/web/src untuk asChild
node scripts/find-aschild.mjs
```

Script menulis laporan ke `.logs/aschild-<timestamp>.json` dengan daftar file, baris, dan tag yang dipakai. Jika masih ditemukan `asChild`, file tersebut perlu dimigrasi mengikuti pola di atas.

## Referensi

- [Base UI — Component Documentation](https://base-ui.com/react/components)
- [shadcn/ui — base-ui preset](https://ui.shadcn.com/docs/base-ui)
- Source: `apps/web/src/shared/ui/button.tsx` (lihat pemakaian `ButtonPrimitive` dari `@base-ui/react/button`)
