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
