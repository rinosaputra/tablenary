import { createBrowserRouter } from "react-router";
import NotFoundPage from "@/routes/not-found";
import { paths } from "@/routes/route-definitions";
import { publicRouterChildren } from "@/public/public-router";
import { appRouterChildren } from "@/app/app-router";

// === ROOT ROUTER ===
export const router = createBrowserRouter([
  // --- PUBLIC ---
  {
    path: paths.public.$path() ?? "/",
    lazy: async () => ({
      Component: (await import("@/public/layout/public-layout")).PublicLayout,
    }),
    errorElement: <NotFoundPage />,
    children: [...publicRouterChildren],
  },

  // --- APP (authed) ---
  {
    path: paths.app.$path(),
    lazy: async () => ({
      Component: (await import("@/app/layout/app-layout")).default,
    }),
    children: [...appRouterChildren],
  },

  // --- 404 ---
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
