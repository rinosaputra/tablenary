/**
 * Public router children for React Router v7 (createBrowserRouter).
 *
 * Each entry lazily imports its page component so bundle splitting
 * remains per-route. Paths are derived from the type-safe definitions
 * in `route-definitions.ts` (re-exported from `./public-routes`).
 *
 * @see ../../routes/route-definitions.ts
 */
import { paths } from "@/routes/route-definitions";

export const publicRouterChildren = [
  {
    index: true,
    lazy: async () => ({
      Component: (await import("@/public/pages/index-page")).default,
    }),
  },
  {
    path: paths.public.$.features.$path({ relative: true }),
    lazy: async () => ({
      Component: (await import("@/public/pages/features-page")).default,
    }),
  },
  {
    path: paths.public.$.pricing.$path({ relative: true }),
    lazy: async () => ({
      Component: (await import("@/public/pages/pricing-page")).default,
    }),
  },
  {
    path: paths.public.$.faq.$path({ relative: true }),
    lazy: async () => ({
      Component: (await import("@/public/pages/faq-page")).default,
    }),
  },
  {
    path: paths.public.$.support.$path({ relative: true }),
    lazy: async () => ({
      Component: (await import("@/public/pages/support-page")).default,
    }),
  },
  {
    path: paths.public.$.contact.$path({ relative: true }),
    lazy: async () => ({
      Component: (await import("@/public/pages/contact-page")).default,
    }),
  },
  {
    path: paths.public.$.community.$path({ relative: true }),
    lazy: async () => ({
      Component: (await import("@/public/pages/community-page")).default,
    }),
  },
  {
    path: paths.public.$.terms.$path({ relative: true }),
    lazy: async () => ({
      Component: (await import("@/public/pages/terms-page")).default,
    }),
  },
  {
    path: paths.public.$.privacy.$path({ relative: true }),
    lazy: async () => ({
      Component: (await import("@/public/pages/privacy-page")).default,
    }),
  },
  {
    path: paths.public.$.cookies.$path({ relative: true }),
    lazy: async () => ({
      Component: (await import("@/public/pages/cookies-page")).default,
    }),
  },
  {
    path: paths.public.$.login.$path({ relative: true }),
    lazy: async () => ({
      Component: (await import("@/modules/auth/pages/login-page")).default,
    }),
  },
  {
    path: paths.public.$.register.$path({ relative: true }),
    lazy: async () => ({
      Component: (await import("@/modules/auth/pages/register-page")).default,
    }),
  },
] as const;

export default publicRouterChildren;
