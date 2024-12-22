"use client";

import * as React from "react";
import { ChevronRight, File, Folder, Home } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
} from "@/components/ui/sidebar";
import { USAGE_EXAMPLE_KEYS } from "@/components/usage-examples";

const data = {
  navMain: [
    {
      title: "Home",
      state: "",
      icon: Home,
      href: "/",
    },
  ],
  tree: [
    {
      title: "app",
      metadata: {
        icon: Folder,
        href: "/app",
      },
      open: false,
      children: [
        {
          title: "api",
          metadata: {
            icon: Folder,
            href: "/app/api",
          },
          open: false,
          children: [
            {
              title: "hello",
              metadata: {
                icon: Folder,
                href: "/app/api/hello",
              },
              open: true,
              children: [
                {
                  title: "route.ts",
                  metadata: {
                    icon: File,
                    href: "/app/api/hello/route",
                  },
                },
              ],
            },
            {
              title: "page.tsx",
              metadata: {
                icon: File,
                href: "/app/page",
              },
            },
            {
              title: "layout.tsx",
              metadata: {
                icon: File,
                href: "/app/layout",
              },
            },
            {
              title: "blog",
              metadata: {
                icon: Folder,
                href: "/app/blog",
              },
              open: false,
              children: [
                {
                  title: "page.tsx",
                  metadata: {
                    icon: File,
                    href: "/app/blog/page",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "usage-examples",
      metadata: {
        icon: Folder,
        href: `/examples#${USAGE_EXAMPLE_KEYS.CONDITIONS}`,
      },
      open: true,
      children: [
        {
          title: "ui",
          open: true,
          children: [
            {
              title: "input.tsx",
              metadata: {
                icon: File,
                href: `/examples#${USAGE_EXAMPLE_KEYS.INPUT}`,
              },
            },
            {
              title: "select.tsx",
              metadata: {
                icon: File,
                href: `/examples#${USAGE_EXAMPLE_KEYS.SELECT}`,
              },
            },
          ],
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <a href={item.href} className="flex items-center gap-2">
                      {item.icon && <item.icon />}
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>{item.state}</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Files</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.tree.map((item, index) => (
                <Tree key={index} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

function Tree({ item }: { item: (typeof data.tree)[0] }) {
  const { title, metadata, children, open } = item;
  const Icon = metadata?.icon || Folder;

  if (!children?.length) {
    return (
      <SidebarMenuButton asChild className="data-[active=true]:bg-transparent">
        {metadata?.href ? (
          <a href={metadata.href} className="flex items-center gap-2">
            <Icon />
            {title}
          </a>
        ) : (
          <>
            <Icon />
            {title}
          </>
        )}
      </SidebarMenuButton>
    );
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={open}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ChevronRight className="transition-transform" />
            <Icon />
            {title}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {children.map((subItem, index) => (
              <Tree key={index} item={subItem as any} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
