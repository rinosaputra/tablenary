/**
 * Type-safe route definitions powered by `react-router-typesafe-routes`.
 *
 * Each `route(...)` call produces an immutable route descriptor that:
 *   - Exposes `$path()` for the absolute path string (used by `createBrowserRouter`).
 *   - Exposes `$buildPath()` for navigation via `<Link>`/`<NavLink>`.
 *   - Encodes typed params / search params when needed.
 *
 * Conventions:
 *   - Path segments MUST NOT include leading/trailing slashes.
 *   - Children compose hierarchically so URLs match the React Router nesting.
 *   - Pathless wrappers use `path: ""` to share params across siblings.
 */
import { route } from "react-router-typesafe-routes";

// === Public-facing routes ===
// Pathless root — children mount at the URL prefix defined on the parent
// `createBrowserRouter` entry (`"/"`).
export const publicRoutes = route({
  children: {
    index: route({ path: "" }),
    login: route({ path: "login" }),
    register: route({ path: "register" }),
  },
});

// === Authed app routes ===
// Mounted at `/app` so URLs become `/app`, `/app/settings`, etc.
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

// Flat export for ergonomic consumption: `paths.public.login.$buildPath()`.
export const paths = {
  public: publicRoutes,
  app: appRoutes,
} as const;
