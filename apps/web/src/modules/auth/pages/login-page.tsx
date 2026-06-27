import { AuthLayout } from "@/modules/auth/layout/auth-layout";
import { LoginForm } from "@/modules/auth/components/login-form";

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
