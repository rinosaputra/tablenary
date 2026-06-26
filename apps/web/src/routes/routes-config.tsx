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
      // Root — redirect otomatis
      // {
      //   index: true,
      //   element: <Navigate to="/dashboard" replace />,
      // },
      // --- PUBLIC ---
      // {
      //   path: "login",
      //   lazy: () => import("../modules/auth/pages/login-page"),
      // },
      // {
      //   path: "register",
      //   lazy: () => import("../modules/auth/pages/register-page"),
      // },
    ],
  },

  // --- AUTHED ---
  {
    lazy: async () => ({
      Component: (await import("@/shared/layout/app/app-layout")).default,
    }),
    errorElement: <NotFoundPage />,
    // children: [
    //   {
    //     path: "dashboard",
    //     lazy: () => import("../modules/dashboard/pages/dashboard-page"),
    //   },
    //   {
    //     path: "settings",
    //     lazy: () => import("../modules/settings/pages/settings-page"),
    //   },
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
