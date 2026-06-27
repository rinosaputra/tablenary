/**
 * Footer link data rendered by `PublicFooter`.
 *
 * Hrefs use typed-safe route paths built from `publicRoutes` in
 * `@/public/public-routes`. External/placeholder routes (support,
 * contact, community) use literal paths and may be re-pointed once
 * concrete pages land.
 */
import { paths } from "@/routes/route-definitions";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerResources: FooterSection = {
  title: "Resources",
  links: [
    { label: "Documentation", href: paths.public.$.docs.$buildPath({}) },
    { label: "Getting Started", href: "/docs/getting-started" },
    { label: "API Reference", href: paths.public.$.api.$buildPath({}) },
    { label: "Changelog", href: paths.public.$.changelog.$buildPath({}) },
  ],
};

export const footerSupport: FooterSection = {
  title: "Help & Support",
  links: [
    { label: "Support", href: "/support" },
    { label: "FAQ", href: paths.public.$.faq.$buildPath({}) },
    { label: "Contact Us", href: "/contact" },
    { label: "Community", href: "/community" },
  ],
};

export const footerLegal: FooterSection = {
  title: "Legal",
  links: [
    { label: "Terms & Conditions", href: paths.public.$.terms.$buildPath({}) },
    { label: "Privacy Policy", href: paths.public.$.privacy.$buildPath({}) },
    { label: "Cookie Policy", href: paths.public.$.cookies.$buildPath({}) },
  ],
};

export const footerSections: FooterSection[] = [
  footerResources,
  footerSupport,
  footerLegal,
];
