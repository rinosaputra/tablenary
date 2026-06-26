import { createBrowserRouter, Navigate, Outlet } from "react-router";
import NotFoundPage from "./not-found";

// --- Placeholder session hook (akan diganti saat auth strategy ditetapkan) ---
// Gunakan Better Auth cookie session atau custom API endpoint
function useIsAuthenticated(): boolean {
  // TODO: Ganti dengan implementasi auth yang sebenarnya
  // Contoh: const { data } = useSession(); return !!data;
  return false;
}

// === PUBLIC LAYOUT ===
function PublicLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

// === AUTHED LAYOUT ===
function AuthedLayout() {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

// === ROUTES ===
export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
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

      // --- AUTHED ---
      {
        element: <AuthedLayout />,
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
    ],
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
