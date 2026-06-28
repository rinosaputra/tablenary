import { AuthLayout } from "@/auth/layout/auth-layout";
import { RegisterForm } from "@/auth/components/register-form";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
