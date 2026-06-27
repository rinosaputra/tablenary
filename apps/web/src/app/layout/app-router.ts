/**
 * Authed app router children for React Router v7 (createBrowserRouter).
 *
 * Each entry lazily imports its page component. Paths are derived from
 * the type-safe definitions in `route-definitions.ts` (re-exported from
 * `./app-routes`).
 *
 * @see ../../routes/route-definitions.ts
 */
import { paths } from "@/routes/route-definitions";

export const appRouterChildren = [
  {
    index: true,
    lazy: async () => ({
      Component: (await import("@/public/pages/index-page")).default,
    }),
  },
  {
    path: paths.app.$.settings.$path({ relative: true }),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("@/public/pages/index-page")).default,
        }),
      },
      {
        path: paths.app.$.settings.$.profile.$path({ relative: true }),
        lazy: async () => ({
          Component: (await import("@/public/pages/index-page")).default,
        }),
      },
    ],
  },
] as const;

export default appRouterChildren;
