import type * as React from "react";

/**
 * Shared types for the public layout components.
 */

export interface NavItem {
  title: string;
  href: string;
}

export interface PublicLayoutProps {
  /** Hide the header entirely. Useful for pages that define their own navbar. */
  hideHeader?: boolean;
  /** Hide the footer entirely. Useful for auth pages that don't want footer chrome. */
  hideFooter?: boolean;
  className?: string;
}

export interface PublicHeaderNavProps extends React.PropsWithChildren {
  /** Navigation items rendered in the header */
  navigation?: NavItem[];
  /** URL for the logo/home link */
  logoHref?: string;
  /** URL for the Login button */
  loginHref?: string;
  className?: string;
}
