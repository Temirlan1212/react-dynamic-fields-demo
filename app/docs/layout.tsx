"use client";
import { AppSidebar } from "@/components/layout/sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "280px",
            "--sidebar-width-icon": "5rem",
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-secondary px-4 sticky top-0 z-20 bg-background">
            <SidebarTrigger className="-ml-1" />
          </header>

          <div className="container mt-10 mb-[200px]">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
