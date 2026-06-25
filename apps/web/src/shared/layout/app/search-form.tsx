import { SidebarInput } from "@/shared/ui/sidebar";

import type { SearchFormProps } from "./types";

export function SearchForm({ ...props }: SearchFormProps) {
  return (
    <form {...props}>
      <SidebarInput name="search" placeholder="Type to search..." />
    </form>
  );
}
