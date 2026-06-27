import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

/**
 * PageHeader — shared hero/header block for sub-pages (/support, /contact,
 * /community, /faq, /terms, /privacy, /cookies). Adapted visually from
 * shadcn-studio/blocks/hero-section-12 (compact sub-page hero).
 *
 * Composition over configuration:
 * - Always centered text inside a `max-w-3xl` content column.
 * - Optional `badge` slot above the title (typically a status pill).
 * - Optional `breadcrumbs` slot for hierarchical navigation.
 * - Children render below the header block for cases where the page needs
 *   extra context (e.g., info chips or quick stats).
 */
export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: ReactNode;
  breadcrumbs?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  badge,
  breadcrumbs,
  children,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "py-12 sm:py-16 lg:py-20",
        "border-b border-border/40",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs ? (
          <div className="mb-6 flex justify-center">{breadcrumbs}</div>
        ) : null}

        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          {badge}

          <h1 className="text-3xl leading-[1.2] font-bold text-balance sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {subtitle ? (
            <p className="text-muted-foreground text-base text-balance sm:text-lg lg:text-xl">
              {subtitle}
            </p>
          ) : null}
        </div>

        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}

export default PageHeader;
