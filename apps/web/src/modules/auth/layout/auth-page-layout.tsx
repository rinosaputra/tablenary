import type { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

type AuthPageLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
};

export function AuthPageLayout({
  title,
  subtitle,
  children,
  className,
}: AuthPageLayoutProps) {
  return (
    <div
      className={cn("flex flex-col items-center gap-2 text-center", className)}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-balance text-sm text-muted-foreground">{subtitle}</p>
      {children}
    </div>
  );
}
