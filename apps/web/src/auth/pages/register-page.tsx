import { ChevronLeftIcon } from "lucide-react";
import { Link } from "react-router";

import { Button } from "@/shared/ui/button";
import { Separator } from "@/shared/ui/separator";
import { paths } from "@/routes/route-definitions";

import { AuthLayout } from "@/auth/layout/auth-layout";
import { RegisterForm } from "@/auth/components/register-form";
import { TablenaryLogo } from "@/shared/ui/tablenary-logo";

export default function RegisterPage() {
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
          <h2 className="mb-1.5 text-2xl font-semibold">Buat Akun Tablenary</h2>
          <p className="text-muted-foreground">
            Daftar sekarang dan mulai kelola data Anda tanpa coding.
          </p>
        </div>

        {/* Form */}
        <RegisterForm />

        {/* Cross link + social */}
        <div className="space-y-4">
          <p className="text-muted-foreground text-center">
            Sudah punya akun?{" "}
            <Link
              to={paths.auth.$.login.$buildPath({})}
              className="text-foreground hover:underline"
            >
              Masuk di sini
            </Link>
          </p>

          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <p>atau</p>
            <Separator className="flex-1" />
          </div>

          <Button variant="ghost" className="w-full" type="button">
            Daftar dengan Google
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}
