# Tablenary — `apps/web`

Front-end web app untuk platform **Tablenary**. Single-page React 19 + Vite + TypeScript + Tailwind CSS 4, dengan route management lewat React Router 8 (`createBrowserRouter`) dan route definitions bertipe lewat [`react-router-typesafe-routes`](https://github.com/fuseswap/react-router-typesafe-routes).

> Bagian dari monorepo Tablenary (`pnpm` workspaces + `turbo`). Bagian lain: `apps/api`, `apps/worker`, dan `packages/*`.

---

## Tech Stack

| Layer         | Tools                                                                 |
| ------------- | --------------------------------------------------------------------- |
| Framework     | React 19 (`react`, `react-dom`)                                       |
| Build / Dev   | Vite 8 (`@vitejs/plugin-react` dengan Oxc)                            |
| Language      | TypeScript 6 (`tsc --noEmit` untuk typecheck)                         |
| Styling       | Tailwind CSS 4 (`@tailwindcss/vite`, `tw-animate-css`, `motion`)      |
| Routing       | React Router 8 (`createBrowserRouter`) + typed routes                 |
| UI Primitives | shadcn/ui (Base UI based) — `button`, `card`, `dialog`, `field`, …    |
| Icons         | `@tabler/icons-react` + `lucide-react`                                |
| Charts        | `recharts`                                                            |
| Forms         | `cmdk`, `react-day-picker`, `embla-carousel-react`, `vaul`            |
| Theme         | `next-themes`                                                         |
| Toasts        | `sonner`                                                              |
| Lint          | ESLint 10 + `typescript-eslint` + `eslint-plugin-react-hooks`         |

---

## Scripts

Jalankan dari folder `apps/web`:

| Perintah         | Fungsi                                              |
| ---------------- | --------------------------------------------------- |
| `pnpm dev`       | Jalankan Vite dev server dengan HMR.                |
| `pnpm build`     | Build production (`tsc -b` + `vite build`).         |
| `pnpm preview`   | Preview hasil build production.                     |
| `pnpm typecheck` | `tsc --noEmit` — cek TypeScript tanpa emit.         |
| `pnpm lint`      | Jalankan ESLint (`eslint .`).                       |

---

## Path Aliases

Konfigurasi di `vite.config.ts` dan `tsconfig.app.json`:

| Alias | Resolve ke        |
| ----- | ----------------- |
| `@/*` | `./src/*` |

Pakai untuk semua import internal, contoh:

```ts
import { Button } from "@/shared/ui/button";
import { paths } from "@/routes/route-definitions";
```

---

## Struktur Folder

```
apps/web/
├── index.html              # Vite entry HTML
├── vite.config.ts          # Vite + Tailwind + alias config
├── tsconfig.app.json       # TS config + path alias
├── eslint.config.js        # ESLint config
└── src/
    ├── main.tsx            # Root: render <App><RouterProvider/></App>
    ├── App.tsx             # Global providers: Theme, Tooltip, Toaster
    │
    ├── routes/             # Routing layer (typed)
    │   ├── route-definitions.ts   # `publicRoutes` & `appRoutes` via `route(...)`
    │   ├── routes-config.tsx      # `createBrowserRouter` — uses paths.*.$path()
    │   └── not-found.tsx          # 404 fallback
    │
    ├── app/                # Mountpoint untuk authenticated app shell
    │   └── layout/         # `app-layout`, `app-sidebar`, `nav-*`, `site-header`, …
    │
    ├── public/             # Mountpoint untuk unauthenticated public shell
    │   ├── layout/         # `public-layout`, `public-header`, `public-footer`
    │   ├── components/     # Landing components (hero, features, pricing, …)
    │   ├── data/           # Static content (faqs, testimonials, logos, …)
    │   ├── pages/          # Route pages (index-page)
    │   ├── public-routes.ts # Route definitions
    │   ├── index.ts
    │   └── types.ts
    │
    ├── modules/            # Feature modules
    │   └── auth/
    │       ├── components/ # Reusable form components (login-form, register-form)
    │       ├── layout/     # `auth-layout`, `auth-page-layout`, `types.ts`
    │       └── pages/      # Route pages (login-page, register-page)
    │
    ├── shared/             # App-wide primitives & utilities
    │   ├── hooks/          # Custom React hooks (e.g. `use-mobile`)
    │   ├── lib/            # Generic helpers (e.g. `cn` classnames)
    │   ├── providers/      # Context providers (`theme-provider`)
    │   ├── ui/             # shadcn/ui primitives + `mode-toggle`, `tablenary-logo`
    │   └── shadcn-studio-ui/ # Extra UI utilities (motion preset, rating, …)
    │
    ├── assets/             # Static assets (gambar, ikon, dll)
    └── styles/
        └── globals.css     # Tailwind entry + design tokens (CSS variables)
```

### Konvensi Penempatan File

- **`routes/`** — semua konfigurasi routing. `route-definitions.ts` adalah single source of truth untuk path; `routes-config.tsx` mendaftarkannya ke router.
- **`app/`** — kode untuk shell area yang butuh auth (sidebar, top bar, settings, dsb).
- **`public/`** — kode untuk halaman publik (landing, marketing, pricing).
- **`modules/<feature>/`** — fitur domain tertentu dengan struktur internal:
  - `components/` — komponen UI yang bisa dipakai ulang dalam fitur
  - `layout/` — wrapper layout spesifik fitur
  - `pages/` — komponen route (default-export, dipanggil dari `routes-config.tsx`)
- **`shared/`** — kode yang dipakai lintas module. Hindari meletakkan kode spesifik fitur di sini.

---

## Routing

Routing bertipe lewat `react-router-typesafe-routes`. Setiap `route(...)` menghasilkan descriptor yang mengekspos:

- `$path()` — absolute path string (untuk `createBrowserRouter`)
- `$buildPath()` — URL siap pakai (untuk `<Link>`/`<NavLink>`)

Definisi ada di `src/routes/route-definitions.ts`:

```ts
export const publicRoutes = route({
  children: {
    index: route({ path: "" }),
    login: route({ path: "login" }),
    register: route({ path: "register" }),
  },
});

export const appRoutes = route({
  path: "app",
  children: {
    index: route({ path: "" }),
    settings: route({
      path: "settings",
      children: {
        index: route({ path: "" }),
        profile: route({ path: "profile" }),
      },
    }),
  },
});

export const paths = { public: publicRoutes, app: appRoutes } as const;
```

### Aturan

- Path segment **tanpa** leading/trailing slash.
- Pathless wrapper (`path: ""`) untuk berbagi params ke siblings.
- Mount layout di level root route (`public`/`app`), page components di level children.
- Hindari hardcoded string URL di `<Link>` — pakai `paths.public.login.$buildPath()`.

---

## Theming

`App.tsx` membungkus seluruh aplikasi dengan:

- `ThemeProvider` (next-themes, default `dark`, storage key `tablenary-theme`)
- `TooltipProvider`
- `Toaster` (sonner)

Pengguna theme switching: `<ModeToggle />` di `@/shared/ui/mode-toggle`.

---

## Menambah UI Component

Gunakan shadcn CLI yang sudah terpasang:

```bash
pnpm dlx shadcn@latest add <component>
```

Component akan ter-install di `src/shared/ui/`. Style/CSS variables dari `globals.css` (Tailwind 4 design tokens) ikut ter-load otomatis.

---

## Development Workflow

1. Install deps dari root monorepo:

   ```bash
   pnpm install
   ```

2. Jalankan dev server (dari root atau dari `apps/web`):

   ```bash
   pnpm --filter web dev
   # atau
   cd apps/web && pnpm dev
   ```

3. Sebelum commit, jalankan:

   ```bash
   pnpm --filter web typecheck
   pnpm --filter web lint
   ```

---

## Lihat Juga

- [`README.md`](../../README.md) — root monorepo
- [`docs/`](../../docs) — dokumentasi tambahan (route migrations, dsb)
