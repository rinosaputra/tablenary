/**
 * Auth router children for React Router v7 (createBrowserRouter).
 *
 * Each entry lazily imports its page component so bundle splitting
 * remains per-route. Paths are derived from the type-safe definitions
 * in `auth-routes.ts`.
 *
 * @see ./auth-routes.ts
 */
import { paths } from "@/routes/route-definitions";
import type { RouteObject } from "react-router";

export const authRouterChildren: RouteObject[] = [
  {
    path: paths.auth.$.login.$path({ relative: true }),
    lazy: async () => ({
      Component: (await import("@/auth/pages/login-page")).default,
    }),
  },
  {
    path: paths.auth.$.register.$path({ relative: true }),
    lazy: async () => ({
      Component: (await import("@/auth/pages/register-page")).default,
    }),
  },
] as const;

export default authRouterChildren;
