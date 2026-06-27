/**
 * Type-safe route definitions powered by `react-router-typesafe-routes`.
 *
 * Re-exports public + authed app route definitions from their owning
 * feature folders. Public lives at src/public/public-routes.ts and
 * authed app lives at src/app/layout/app-routes.ts.
 *
 * Conventions:
 *   - Path segments MUST NOT include leading/trailing slashes.
 *   - Children compose hierarchically so URLs match the React Router nesting.
 *   - Pathless wrappers use `path: ""` to share params across siblings.
 */
import { publicRoutes } from "@/public/public-routes";
import { appRoutes } from "@/app/app-routes";

// Flat export for ergonomic consumption: `paths.public.login.$buildPath()`.
export const paths = {
  public: publicRoutes,
  app: appRoutes,
} as const;
