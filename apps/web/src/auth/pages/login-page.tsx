import { AuthLayout } from "@/auth/layout/auth-layout";
import { LoginForm } from "@/auth/components/login-form";

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
