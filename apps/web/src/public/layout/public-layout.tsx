import { Outlet } from "react-router";

import { cn } from "@/shared/lib/utils";

import { PublicHeader } from "./public-header";
import { PublicFooter } from "./public-footer";
import type { PublicLayoutProps } from "./types";

/**
 * PublicLayout — wrapper for all public-facing pages.
 * Renders header + outlet + footer chrome.
 */
export function PublicLayout({
  hideHeader = false,
  hideFooter = false,
  className,
}: PublicLayoutProps) {
  return (
    <div className={cn("flex min-h-screen flex-col", className)}>
      {!hideHeader && <PublicHeader />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!hideFooter && <PublicFooter />}
    </div>
  );
}
