import { cn } from "@/shared/lib/utils";

import type { AuthLayoutProps } from "@/auth/types";
import { AuthDashboardPreview } from "@/auth/components/auth-dashboard-preview";

/**
 * AuthLayout — full-height split-screen layout (h-dvh).
 * Left: dashboard preview (hidden on mobile).
 * Right: auth form content with heading, links.
 * Adapted from shadcn-studio/blocks/{login,register}-page-02.
 */
export function AuthLayout({ className, children }: AuthLayoutProps) {
  return (
    <div
      className={cn(
        "h-dvh lg:grid lg:grid-cols-6",
        className,
      )}
    >
      {/* Left: Dashboard Preview */}
      <div className="max-lg:hidden lg:col-span-3 xl:col-span-4">
        <AuthDashboardPreview />
      </div>

      {/* Right: Form Content */}
      <div className="flex h-full flex-col items-center justify-center py-10 sm:px-5 lg:col-span-3 xl:col-span-2">
        <div className="w-full max-w-md px-6">{children}</div>
      </div>
    </div>
  );
}
