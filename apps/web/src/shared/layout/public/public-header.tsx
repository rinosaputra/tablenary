import { MenuIcon } from "lucide-react";

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

export function PublicHeader({
  navigation,
  logoHref = "/",
  loginHref = "/login",
  className,
}: PublicHeaderNavProps) {
  return (
    <header className={cn("sticky top-0 z-50 bg-background", className)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6">
        <a href={logoHref}>
          <TablenaryLogo />
        </a>

        {/* Desktop nav */}
        <nav className="text-muted-foreground hidden items-center gap-6 font-medium md:flex">
          {navigation?.map((item, index) => (
            <a key={index} href={item.href} className="hover:text-primary">
              {item.title}
            </a>
          ))}
        </nav>

        {/* Right side: Login + Mobile menu */}
        <div className="flex items-center gap-4">
          <a href={loginHref} className="max-md:hidden">
            <Button className="rounded-lg text-base" size="lg">
              Login
            </Button>
          </a>
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
                    <a href={item.href} className="w-full">
                      {item.title}
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <a href={loginHref} className="block">
                  <DropdownMenuItem className="bg-transparent!">
                    <Button className="w-full">Login</Button>
                  </DropdownMenuItem>
                </a>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator />
    </header>
  );
}
