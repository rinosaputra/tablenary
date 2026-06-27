import { MenuIcon } from "lucide-react";
import { Link } from "react-router";

import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Separator } from "@/shared/ui/separator";
import { TablenaryLogo } from "@/shared/ui/tablenary-logo";

import type { PublicHeaderNavProps } from "./types";
import { cn } from "@/shared/lib/utils";
import { paths } from "@/routes/route-definitions";

export function PublicHeader({
  navigation,
  logoHref = paths.public.$.index.$buildPath(),
  loginHref = paths.public.$.login.$buildPath(),
  className,
}: PublicHeaderNavProps) {
  return (
    <header className={cn("sticky top-0 z-50 bg-background", className)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6">
        <Link to={logoHref}>
          <TablenaryLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="text-muted-foreground hidden items-center gap-6 font-medium md:flex">
          {navigation?.map((item, index) => (
            <Link key={index} to={item.href} className="hover:text-primary">
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right side: Login + Mobile menu */}
        <div className="flex items-center gap-4">
          <Link to={loginHref} className="max-md:hidden">
            <Button className="rounded-lg text-base" size="lg">
              Login
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                {navigation?.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <Link to={item.href} className="w-full">
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <Link to={loginHref} className="block">
                  <DropdownMenuItem className="bg-transparent!">
                    <Button className="w-full">Login</Button>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator />
    </header>
  );
}
