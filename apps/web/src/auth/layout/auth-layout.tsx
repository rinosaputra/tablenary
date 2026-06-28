import { cn } from "@/shared/lib/utils";

import type { AuthLayoutProps } from "./types";

export function AuthLayout({ className, children }: AuthLayoutProps) {
  return (
    <div
      className={cn(
        "flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10",
        className,
      )}
    >
      <div className="w-full max-w-sm md:max-w-4xl">{children}</div>
    </div>
  );
}
