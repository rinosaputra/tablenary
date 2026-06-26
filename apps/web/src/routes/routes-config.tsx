import { createBrowserRouter } from "react-router";
import NotFoundPage from "./not-found";

// === ROUTES ===
export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => ({
      Component: (await import("@/shared/layout/public/public-layout"))
        .PublicLayout,
    }),
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("@/modules/landing/pages/index-page"))
            .default,
        }),
      },
    ],
  },

  // --- AUTHED ---
  {
    lazy: async () => ({
      Component: (await import("@/shared/layout/app/app-layout")).default,
    }),
    errorElement: <NotFoundPage />,
    // children: [
    // {
    //   path: "login",
    //   lazy: () => import("@/modules/auth/pages/login-page"),
    // },
    // {
    //   path: "register",
    //   lazy: () => import("@/modules/auth/pages/register-page"),
    // },
    // ],
  },

  // --- APP LAYOUT ---
  {
    lazy: async () => ({
      Component: (await import("@/shared/layout/app/app-layout")).default,
    }),
    children: [],
  },

  // --- 404 ---
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
