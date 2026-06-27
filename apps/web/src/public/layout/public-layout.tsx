import { Outlet } from "react-router";

import { cn } from "@/shared/lib/utils";

import { PublicHeader } from "../components/public-header";
import { PublicFooter } from "../components/public-footer";
import type { PublicLayoutProps } from "../types";
import { publicNavigation } from "../data/navigation";

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
      {!hideHeader && <PublicHeader navigation={publicNavigation} />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!hideFooter && <PublicFooter />}
    </div>
  );
}
