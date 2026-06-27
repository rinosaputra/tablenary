import { createBrowserRouter } from "react-router";
import NotFoundPage from "./not-found";
import { paths } from "./route-definitions";

console.log("/", paths.public.$path());

// === ROUTES ===
export const router = createBrowserRouter([
  // --- PUBLIC ---
  {
    path: paths.public.$path() ?? "/",
    lazy: async () => ({
      Component: (await import("@/public/layout/public-layout"))
        .PublicLayout,
    }),
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("@/public/pages/index-page"))
            .default,
        }),
      },
      {
        path: paths.public.$.features.$path({ relative: true }),
        lazy: async () => ({
          Component: (await import("@/public/pages/features-page"))
            .default,
        }),
      },
      {
        path: paths.public.$.pricing.$path({ relative: true }),
        lazy: async () => ({
          Component: (await import("@/public/pages/pricing-page"))
            .default,
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
          Component: (await import("@/public/pages/community-page"))
            .default,
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
          Component: (await import("@/modules/auth/pages/register-page"))
            .default,
        }),
      },
    ],
  },

  // --- APP (authed) ---
  {
    path: paths.app.$path(),
    lazy: async () => ({
      Component: (await import("@/app/layout/app-layout")).default,
    }),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("@/public/pages/index-page"))
            .default,
        }),
      },
      {
        path: paths.app.$.settings.$path({ relative: true }),
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import("@/public/pages/index-page"))
                .default,
            }),
          },
          {
            path: paths.app.$.settings.$.profile.$path({ relative: true }),
            lazy: async () => ({
              Component: (await import("@/public/pages/index-page"))
                .default,
            }),
          },
        ],
      },
    ],
  },

  // --- 404 ---
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
