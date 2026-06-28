import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export type RegisterFormProps = { className?: string };

/**
 * RegisterForm — adapted from shadcn-studio/blocks/register-02/register-form.tsx.
 * Fields: Username, Email, Password, Confirm Password, Privacy checkbox.
 */
export function RegisterForm({ className }: RegisterFormProps) {
  return (
    <form className={`space-y-4 ${className ?? ""}`} onSubmit={(e) => e.preventDefault()}>
      {/* Username */}
      <div className="space-y-1">
        <Label className="leading-5" htmlFor="reg-username">
          Nama Pengguna
        </Label>
        <Input
          type="text"
          id="reg-username"
          name="username"
          placeholder="Masukkan nama pengguna"
          required
          autoComplete="username"
        />
      </div>

      {/* Email */}
      <div className="space-y-1">
        <Label className="leading-5" htmlFor="reg-email">
          Email
        </Label>
        <Input
          type="email"
          id="reg-email"
          name="email"
          placeholder="Masukkan email Anda"
          required
          autoComplete="email"
        />
      </div>

      {/* Password */}
      <PasswordField label="Password" />

      {/* Confirm Password */}
      <PasswordField label="Konfirmasi Password" />

      {/* Privacy Policy */}
      <div className="flex items-center gap-3">
        <Checkbox id="reg-privacy" className="size-5" />
        <Label htmlFor="reg-privacy" className="text-sm font-normal">
          Saya setuju dengan kebijakan privasi dan syarat layanan
        </Label>
      </div>

      <Button className="w-full" type="submit">
        Buat Akun
      </Button>
    </form>
  );
}

function PasswordField({ label }: { label: string }) {
  return (
    <div className="space-y-1">
      <Label className="leading-5" htmlFor={`reg-${label.toLowerCase().split(" ")[0]}`}>
        {label}
      </Label>
      <PasswordInput id={`reg-${label.toLowerCase().split(" ")[0]}`} label={label} />
    </div>
  );
}

function PasswordInput({ id, label }: { id: string; label: string }) {
  const [visible, setVisible] = false as boolean;

  return (
    <div className="relative">
      <Input
        id={id}
        name="password"
        type={visible ? "text" : "password"}
        placeholder="••••••••••••••••"
        className="pr-9"
        required
        autoComplete="new-password"
      />
      <Button
        variant="ghost"
        size="icon"
        type="button"
        onClick={() => setVisible((p) => !p)}
        className="absolute inset-y-0 right-0 rounded-l-none text-muted-foreground hover:bg-transparent"
      >
        {visible ? (
          <EyeOffIcon className="size-4" />
        ) : (
          <EyeIcon className="size-4" />
        )}
        <span className="sr-only">
          {visible ? "Sembunyikan" : "Tampilkan"} {label}
        </span>
      </Button>
    </div>
  );
}

