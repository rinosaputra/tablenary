import { Outlet, useRouteError } from "react-router";

function NotFoundPage() {
  const error = useRouteError();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-muted-foreground">Halaman tidak ditemukan</p>
        <Outlet />
      </div>
    </div>
  );
}

export default NotFoundPage;
