import { Outlet } from "react-router";

import { SidebarInset, SidebarProvider } from "@/shared/ui/sidebar";

import { AppSidebar } from "@/app/components/app-sidebar";
import { SiteHeader } from "@/app/components/site-header";

function AppLayout() {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <Outlet />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}

export default AppLayout;
