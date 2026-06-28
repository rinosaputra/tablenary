import { ChevronLeftIcon } from "lucide-react";
import { Link } from "react-router";

import { Button } from "@/shared/ui/button";
import { Separator } from "@/shared/ui/separator";
import { paths } from "@/routes/route-definitions";

import { AuthLayout } from "@/auth/layout/auth-layout";
import { LoginForm } from "@/auth/components/login-form";
import { TablenaryLogo } from "@/shared/ui/tablenary-logo";

export default function LoginPage() {
  return (
    <AuthLayout>
      {/* Back to website */}
      <Link
        to="/"
        className="mb-12 flex items-center gap-2 text-muted-foreground group sm:mb-16 lg:mb-24"
      >
        <ChevronLeftIcon className="transition-transform group-hover:-translate-x-0.5" />
        <p>Kembali ke beranda</p>
      </Link>

      <div className="flex flex-col gap-6">
        {/* Logo */}
        <TablenaryLogo />

        {/* Heading */}
        <div>
          <h2 className="mb-1.5 text-2xl font-semibold">Masuk ke Tablenary</h2>
          <p className="text-muted-foreground">
            Kirim Pesan Langsung dan Fokus pada Pertumbuhan Anda.
          </p>
        </div>

        {/* Form */}
        <LoginForm />

        {/* Cross link + social */}
        <div className="space-y-4">
          <p className="text-muted-foreground text-center">
            Belum punya akun?{" "}
            <Link
              to={paths.auth.$.register.$buildPath({})}
              className="text-foreground hover:underline"
            >
              Buat akun
            </Link>
          </p>

          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <p>atau</p>
            <Separator className="flex-1" />
          </div>

          <Button variant="ghost" className="w-full" type="button">
            Masuk dengan Google
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}
