import { AuthLayout } from "@/shared/layout/auth/auth-layout";
import { LoginForm } from "@/modules/auth/layout/login-form";

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
