# Public Layout Planning

**Created:** 2026-06-26  
**Status:** Planning / Discussion

## Context

We are discussing the `public` layout structure at `apps/web/src/shared/layout/public/`.

## Current State

- Directory exists at `apps/web/src/shared/layout/public/` but is **empty**
- Existing layout patterns in the codebase:
  - **`AuthLayout`** (`shared/layout/auth/auth-layout.tsx`): Centered layout with `min-h-svh`, `bg-muted`, `md:max-w-4xl`, used for login/register pages
  - **`AppLayout`** (`shared/layout/app/app-layout.tsx`): Full dashboard layout with `SidebarProvider`, `SiteHeader`, `SidebarInset`, using `<Outlet />` for nested routes
  - **`PublicLayout`** (`routes-config.tsx`): Minimal wrapper with just `<main><Outlet /></main>` — too barebones

## Routes Configuration (`routes-config.tsx`)

Current routes setup uses `createBrowserRouter` with:
1. **`PublicLayout`** — wraps public routes (`/`, `/login`, `/register`)
2. **`AuthedLayout`** — guards authenticated routes, redirects to `/login` if not authenticated
3. **`AppLayout`** — sidebar+header layout for dashboard, settings, etc.

```tsx
// Current PublicLayout (too minimal)
function PublicLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
```

## Implementation Status: ✅ Done

### Files Created

1. **`shared/ui/tablenary-logo.tsx`** — Custom SVG logo component (Adapted from `Logo` in shadcn-studio). Renders an "T" monogram with "Tablenary" text.
2. **`shared/layout/public/public-header.tsx`** — Responsive navbar adapted from `navbar-component-05`. Features:
   - Sticky header with `z-50`
   - Desktop horizontal nav links
   - Mobile hamburger menu via `DropdownMenu`
   - Login CTA button
   - Responsive: collapses nav links into dropdown on mobile
3. **`shared/layout/public/public-footer.tsx`** — Multi-column footer adapted from `footer-component-05`. Features:
   - 5-column grid layout (Brand + Resources + Help/Legal)
   - Social links (GitHub, Instagram, X, YouTube) via `@tabler/icons-react`
   - Copyright bar with `Badge` security label
   - Separator lines between sections
4. **`shared/layout/public/public-layout.tsx`** — Wrapper composing `header + Outlet + footer`. Supports `hideHeader` and `hideFooter` props for pages that need partial chrome (e.g., `/login` can hide header+footer).
5. **`shared/layout/public/types.ts`** — Shared TypeScript interfaces (`NavItem`, `PublicLayoutProps`, `PublicHeaderNavProps`)
6. **`shared/layout/public/index.ts`** — Barrel export

### Dependencies Installed
- `@tabler/icons-react@3.44.0` — social media icons (GitHub, X/Twitter, Instagram, YouTube)

### Key Decisions
- **Not using `asChild`**: The base-ui preset uses `render` prop, not `asChild`. All links are wrapped in regular `<a>` tags around the shadcn components.
- **Login button wraps in `<a>`**: The `Button` component renders a `<button>` so we wrap it in `<a>` for navigation rather than passing unsupported props.
- **Responsive**: Matches original pattern — desktop nav is visible, mobile collapses into dropdown.
- **Tailwind v4 compatible**: Uses `text-balance`, `bg-background`, `text-muted-foreground` and similar Tailwind v4 class names.
- **Dark mode**: Logo handles `dark:stroke-black` for contrast; footer social links inherit muted colors.

### Usage Example

```tsx
// In routes-config.tsx:
import { PublicLayout } from "@/shared/layout/public";

// Basic usage — header + footer
{
  element: <PublicLayout />,
  children: [...],
}

// Hide both for auth pages
<PublicLayout hideHeader hideFooter />
```

### Files Referenced
- [routes-config.tsx](../../../../../apps/web/src/routes/routes-config.tsx)
- [auth-layout.tsx](../../../../../apps/web/src/shared/layout/auth/auth-layout.tsx)
- [app-layout.tsx](../../../../../apps/web/src/shared/layout/app/app-layout.tsx)
- [navbar-component-05](../../../../../../../shadcn-ui-studio/nextjs/components/shadcn-studio/blocks/navbar-component-05/navbar-component-05.tsx) (source reference)
- [footer-component-05](../../../../../../../shadcn-ui-studio/nextjs/components/shadcn-studio/blocks/footer-component-05/footer-component-05.tsx) (source reference)

### Reference: `AuthPageLayout` (`modules/auth/layout/auth-page-layout.tsx`)
Already exists as a reusable wrapper for auth pages:
```tsx
export function AuthPageLayout({ title, subtitle, children, className }) {
  // renders title + subtitle + children
}
```
This could potentially be adapted or extended for public page templates too.

## Files Referenced
- [routes-config.tsx](../../../../../apps/web/src/routes/routes-config.tsx)
- [auth-layout.tsx](../../../../../apps/web/src/shared/layout/auth/auth-layout.tsx)
- [app-layout.tsx](../../../../../apps/web/src/shared/layout/app/app-layout.tsx)
- [auth-page-layout.tsx](../../../../../apps/web/src/modules/auth/layout/auth-page-layout.tsx)
