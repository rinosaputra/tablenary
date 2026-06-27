import { ShieldCheckIcon } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { Link } from "react-router";

import { Badge } from "@/shared/ui/badge";
import { Separator } from "@/shared/ui/separator";
import { TablenaryLogo } from "@/shared/ui/tablenary-logo";
import { paths } from "@/routes/route-definitions";

import {
  footerResources,
  footerSupport,
  footerLegal,
  type FooterLink,
} from "../data/footer-links";

interface PublicFooterProps {
  copyrightText?: string;
}

export function PublicFooter({
  copyrightText = "Tablenary",
}: PublicFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-16 md:py-24 lg:grid-cols-5">
        {/* Brand col */}
        <div className="flex flex-col items-start gap-4 lg:col-span-2">
          <Link to={paths.public.$.index.$buildPath({})}>
            <TablenaryLogo />
          </Link>
          <p className="text-muted-foreground text-balance">
            Simplify your data management with Tablenary — an open-source
            platform for building and organizing dynamic tables effortlessly.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <IconBrandGithub className="size-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <IconBrandInstagram className="size-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <IconBrandX className="size-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <IconBrandYoutube className="size-5" />
            </a>
          </div>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-5">
          <div className="text-lg font-medium">{footerResources.title}</div>
          <ul className="text-muted-foreground space-y-3">
            {footerResources.links.map((link: FooterLink, i: number) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-5">
          <div className="text-lg font-medium">{footerSupport.title}</div>
          <ul className="text-muted-foreground space-y-3">
            {footerSupport.links.map((link: FooterLink, i: number) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-5">
          <div className="text-lg font-medium">{footerLegal.title}</div>
          <ul className="text-muted-foreground space-y-3">
            {footerLegal.links.map((link: FooterLink, i: number) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator />

      {/* Copyright */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 sm:px-6">
        <p className="font-medium">
          &copy; {currentYear} {copyrightText}. All rights reserved.
        </p>
        <Badge variant="outline">
          <ShieldCheckIcon className="size-4.5! text-green-600" /> Secure &amp;
          Open Source
        </Badge>
      </div>
    </footer>
  );
}
