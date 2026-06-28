import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export type LoginFormProps = { className?: string };

/**
 * LoginForm — adapted from shadcn-studio/blocks/login-page-02/login-form.tsx.
 * Fields: Email, Password (with toggle), Remember Me, Forgot Password.
 */
export function LoginForm({ className }: LoginFormProps) {
  return (
    <form className={`space-y-4 ${className ?? ""}`} onSubmit={(e) => e.preventDefault()}>
      {/* Email */}
      <div className="space-y-1">
        <Label className="leading-5" htmlFor="login-email">
          Email
        </Label>
        <Input
          type="email"
          id="login-email"
          name="email"
          placeholder="Masukkan email Anda"
          required
          autoComplete="email"
        />
      </div>

      {/* Password */}
      <PasswordField label="Password" />

      {/* Remember Me + Forgot Password */}
      <div className="flex items-center justify-between gap-y-2">
        <div className="flex items-center gap-3">
          <Checkbox id="login-remember" className="size-5" />
          <Label htmlFor="login-remember" className="text-sm font-normal">
            Ingat saya
          </Label>
        </div>
        <a href="#" className="text-sm hover:underline">
          Lupa password?
        </a>
      </div>

      <Button className="w-full" type="submit">
        Masuk
      </Button>
    </form>
  );
}

function PasswordField({ label }: { label: string }) {
  return (
    <div className="space-y-1">
      <Label className="leading-5" htmlFor={`login-${label.toLowerCase()}`}>
        {label}
      </Label>
      <PasswordInput id={`login-${label.toLowerCase()}`} label={label} />
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
        placeholder="••••��•••••••••••"
        className="pr-9"
        required
        autoComplete="current-password"
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

