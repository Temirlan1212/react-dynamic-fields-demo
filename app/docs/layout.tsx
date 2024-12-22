"use client";
import { AppSidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { CONTACTS } from "@/lib/contacts";
import { Github } from "lucide-react";
import Link from "next/link";
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
          <header className="flex h-12 shrink-0 items-center justify-between gap-2 border-b border-secondary px-4 sticky top-0 z-20 bg-background">
            <SidebarTrigger className="-ml-1" />
            <Button
              asChild
              size="sm"
              variant="ghost"
              aria-label="View on GitHub"
            >
              <Link
                aria-label="View on GitHub"
                href={CONTACTS.github}
                target="_blank"
              >
                <Github className="size-5" />
              </Link>
            </Button>
          </header>

          <div className="container mt-10 mb-[200px]">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
