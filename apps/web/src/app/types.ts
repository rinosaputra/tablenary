import type * as React from "react";
import type { LucideIcon } from "lucide-react";
import type { SidebarGroup } from "@/shared/ui/sidebar";

// === NavMain ===
export type NavMainItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

export type NavMainProps = {
  items: NavMainItem[];
};

// === NavProjects ===
export type NavProjectItem = {
  name: string;
  url: string;
  icon: LucideIcon;
};

export type NavProjectsProps = {
  projects: NavProjectItem[];
};

// === NavSecondary ===
export type NavSecondaryItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export type NavSecondaryProps = {
  items: NavSecondaryItem[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>;

// === NavUser ===
export type NavUserUser = {
  name: string;
  email: string;
  avatar: string;
};

export type NavUserProps = {
  user: NavUserUser;
};

// === SearchForm ===
export type SearchFormProps = React.ComponentProps<"form">;

// === SidebarData ===
export type AppSidebarData = {
  user: NavUserUser;
  navMain: NavMainItem[];
  navSecondary: NavSecondaryItem[];
  projects: NavProjectItem[];
};
