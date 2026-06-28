import type * as React from "react";
import type { JSX } from "react";
import type { LucideIcon } from "lucide-react";

/**
 * Shared types for public-facing pages and layout components.
 */

// ── Page content types ────────────────────────────────────────────────

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  cardBorderColor: string;
  avatarTextColor: string;
  avatarBgColor: string;
}

export interface RealTimeDataItem {
  title: string;
  badgeContent: string;
  value: string;
  changePercentage: number;
  svg: JSX.Element;
}

export interface EarningReportItem {
  icon: JSX.Element;
  title: string;
  department: string;
  value: string;
  trend: string;
  percentage: number;
}

export interface EarningReportChartItem {
  day: string;
  earning: number;
  fill: string;
}

export interface SocialMediaItem {
  image: string;
  name: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface PricingFeature {
  key: string;
  label: string;
}

export interface PricingComparisonPlan {
  name: string;
  price: string;
  period: string;
  isPopular?: boolean;
  features: Record<string, boolean | string>;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface TestimonialItem {
  name: string;
  handle: string;
  avatar: string;
  rating: number;
  title: string;
  content: string;
  platformName: string;
  platformImage: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LogoData {
  name: string;
  url: string;
  icon: React.ElementType;
}

// ── Layout types ──────────────────────────────────────────────────────

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
