import { paths } from "@/routes/route-definitions";

import type { NavItem } from "../types";

/**
 * Navigation items rendered in the public header.
 * Hrefs are typed-safe route paths built from `publicRoutes` in
 * `@/public/public-routes`. Consumers can override the array via the
 * `navigation` prop on `PublicHeader`.
 */
export interface PublicNavItem extends NavItem {
  /** Stable identifier — useful for keying and analytics */
  id: string;
}

export const publicNavigation: PublicNavItem[] = [
  { id: "features", title: "Features", href: paths.public.$.features.$buildPath({}) },
  { id: "pricing", title: "Pricing", href: paths.public.$.pricing.$buildPath({}) },
  { id: "docs", title: "Documentation", href: paths.public.$.docs.$buildPath({}) },
  { id: "changelog", title: "Changelog", href: paths.public.$.changelog.$buildPath({}) },
];
