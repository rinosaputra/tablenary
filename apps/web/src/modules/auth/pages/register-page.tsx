import { AuthLayout } from "@/shared/layout/auth/auth-layout";
import { RegisterForm } from "@/modules/auth/layout/register-form";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
