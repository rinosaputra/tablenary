# Struktur Folder apps/web — tablenary

## Ringkasan

Project ini menggunakan arsitektur **domain-driven** dengan pemisahan jelas antara:

- **Routes**: peta URL (tipis, hanya composed dari halaman)
- **Modules**: fitur domain (auth, dashboard, dll)
- **Shared**: aset lintas domain (shadcn UI, utils, hooks, queries)

## Struktur Lengkap

```
apps/web/
├── src/
│   ├── shared/                         # Cross-cutting concern
│   │   ├── ui/                         # shadcn/ui components (base-ui preset)
│   │   ├── providers/                  # Context providers (theme, dll)
│   │   │   └── theme-provider.tsx
│   │   ├── layout/                     # Layout components
│   │   │   └── mode-toggle.tsx
│   │   ├── hooks/                      # Custom hooks lintas fitur
│   │   ├── lib/                        # Utilities (cn, helper functions)
│   │   └── queries/                    # TanStack Query setup (optional)
│   │
│   ├── routes/                         # Peta URL — tipis saja, tidak ada logic bisnis
│   │   ├── _public.tsx                 # Layout publik (tanpa auth)
│   │   ├── _public/
│   │   │   ├── index.tsx               # /          → redirect ke dashboard
│   │   │   └── login.tsx               # /login
│   │   │
│   │   ├── _authed.tsx                 # Layout dengan auth guard (navbar, sidebar)
│   │   ├── _authed/
│   │   │   ├── dashboard.tsx           # /dashboard
│   │   │   ├── settings.tsx            # /settings
│   │   │   └── (route placeholders untuk modul lainnya)
│   │   │
│   │   └── not-found.tsx               # 404 fallback
│   │
│   ├── modules/                        # Fitur domain-based
│   │   ├── auth/
│   │   │   ├── pages/                  # Halaman yang di-import oleh routes/
│   │   │   │   ├── login-page.tsx
│   │   │   │   └── register-page.tsx
│   │   │   ├── components/             # Komponen khusus untuk fitur auth
│   │   │   │   └── google-signin-btn.tsx
│   │   │   ├── hooks/                  # Custom hooks per fitur
│   │   │   │   └── use-session.ts
│   │   │   ├── services/               # API calls per fitur
│   │   │   │   └── auth-service.ts
│   │   │   ├── types.ts                # TypeScript types
│   │   │   └── index.ts                # Barrel export
│   │   │
│   │   └── dashboard/
│   │       ├── pages/
│   │       │   └── dashboard-page.tsx
│   │       ├── components/
│   │       ├── queries/
│   │       └── types.ts
│   │
│   ├── App.tsx                         # Root component, wrap dengan providers
│   ├── main.tsx                        # Entry point, RouterProvider, queryClient
│   └── styles/
│       └── globals.css                 # Tailwind & CSS variables
│
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Penjelasan Per Bagian

### `shared/ui/` — shadcn/ui (base-ui preset)

Folder ini diisi oleh komponen yang di-generate dari `pnpm dlx shadcn@latest add <nama>`.

- Path alias: `@/shared/ui/` → contoh `@/shared/ui/button`
- Menggunakan preset **base-ui** (`b2BphlJL6`), bukan Radix UI
- Tidak dimodifikasi langsung; gunakan `pnpm dlx shadcn@latest add` untuk update
- Berisi: Button, Card, Input, Table, Dialog, Tooltip, Sonner, dll.

### `shared/providers/` — Context Providers

Berisi provider context lintas fitur:

- `theme-provider.tsx` — context untuk dark mode (light/dark/system)
- Path alias: `@/shared/providers/`

### `shared/layout/` — Layout Components

Komponen layout siap pakai:

- `mode-toggle.tsx` — tombol toggle dark/light/system
- Path alias: `@/shared/layout/`

### `shared/lib/` — Utilities

Berisi fungsi-fungsi helper lintas fitur:

- `cn()` dari `clsx` + `tailwind-merge`
- Helper umum: format tanggal, validasi, dll.

### `routes/` — Peta URL

**Hanya** berfungsi sebagai komposer:

1. Import halaman dari `modules/*/pages/`
2. Import komponen UI dari `shared/ui/`
3. Import layout khusus dari `routes/_public.tsx` / `_authed.tsx`
4. Tidak ada logic bisnis (state, fetch, mutation)

#### Pola Naming

| File            | Purpose                                                   |
| --------------- | --------------------------------------------------------- |
| `_public.tsx`   | Layout wrapper halaman publik (footer, navbar tanpa auth) |
| `_authed.tsx`   | Layout wrapper halaman terlindungi (sidebar, auth check)  |
| `index.tsx`     | Route root dalam layout                                   |
| `login.tsx`     | Route `/login` dalam layout publik                        |
| `not-found.tsx` | Fallback 404                                              |

### `modules/` — Domain Features

Setiap folder mewakili **satu fitur domain** yang mandiri.
Struktur dalam tiap modul mengikuti prinsip **vertical slice**:

```
modules/<nama>/
├── pages/         # Halaman → dipanggil routes/
├── components/    # Komponen khusus modul → digunakan oleh pages/
├── hooks/         # useSession, useFeatureFlags, dll.
├── services/      # API calls → digunakan oleh TanStack Query mutations
├── queries/       # React Query hooks (optionally)
├── types.ts       # Interfaces, enums
└── index.ts       # Barrel exports
```

**Prinsip**: Sebuah modul boleh menggunakan apapun dari `shared/`, tapi **tidak boleh** memodul lain secara langsung (kecuali melalui API layer).

## Alur Kerja Umum

### Menambah Fitur Baru (contoh: "inventory")

```bash
# 1. Buat modul baru
mkdir -p src/modules/inventory/{pages,components,hooks,services,queries}
touch src/modules/inventory/index.ts src/modules/inventory/types.ts

# 2. Tambah halaman baru
touch src/modules/inventory/pages/inventory-page.tsx

# 3. Registrasi di routes/
#    - Import halaman ke routes/_authed/inventory.tsx
#    - Atau langsung ke routes.tsx jika tidak butuh layout khusus
```

### Menambah Komponen UI (shadcn)

```bash
cd apps/web && pnpm dlx shadcn@latest add <nama-komponen>
# Hasilnya otomatis masuk ke shared/ui/
```

### Setup Theme Provider (dark mode)

```tsx
// App.tsx
import { ThemeProvider } from "@/shared/providers/theme-provider"
import { Toaster } from "@/shared/ui/sonner"

function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="tablenary-theme">
      {children}
      <Toaster />
    </ThemeProvider>
  )
}
```

### Pakai Mode Toggle

```tsx
import { ModeToggle } from "@/shared/layout/mode-toggle"

// Letakkan di header/navbar
<ModeToggle />
```

### Menambahkan Route

```tsx
// routes/_authed.tsx atau routes/_authed/<route>.tsx
// 1. Import layout
// 2. Import halaman dari modules/*/pages/
// 3. Tambahkan di createBrowserRouter()
```

## Data Fetching Strategy

Menggunakan **TanStack Query** untuk server state:

- Setup: `shared/queries/query-client.ts` (optional, bisa di `main.tsx`)
- Per-feature hooks: `modules/<nama>/queries/use<Feature>List.ts`
- Mutations: `modules/<nama>/services/<resource>-service.ts`

## Routing Conventions

- **Path root**: `apps/web/` — semua route relatif terhadap ini
- **Protected routes**: gunakan layout `_authed.tsx` dengan auth guard di atas route tree
- **Public routes**: gunakan layout `_public.tsx` untuk halaman login, register, landing

## Commit Message Guidelines

Gunakan Conventional Commits scoped ke `web`:

- `feat(web): ...` — menambah fitur baru
- `chore(web): ...` — setup tools, install deps
- `style(web): ...` — formatting changes (Prettier, dll)
- `docs(web): ...` — ubah dokumentasi
- `refactor(web): ...` — refactor tanpa mengubah behavior
