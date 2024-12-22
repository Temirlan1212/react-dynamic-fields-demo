"use client";

import * as React from "react";
import { ChevronRight, File, FileQuestion, Folder, Home } from "lucide-react";
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
import { NAV_ITEMS } from "@/lib/contacts";
import { REACT_DYNAMIC_FIELDS_SCHEMA_DOCS_SIDEBAR_TREE } from "@/components/docs";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: NAV_ITEMS.landingPage.title,
      state: "",
      icon: Home,
      href: NAV_ITEMS.landingPage.href,
    },

    {
      title: NAV_ITEMS.faq.title,
      state: "",
      icon: FileQuestion,
      href: NAV_ITEMS.faq.href,
    },
  ],
  tree: [
    {
      title: "usage-examples",
      open: true,
      children: [
        {
          title: "all-examples.tsx",
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsExamples.href}#`,
          },
        },
        {
          title: "style-example.tsx",
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsExamples.href}#${USAGE_EXAMPLE_KEYS.STYLE}`,
          },
        },
        {
          title: "stepper-example.tsx",
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsExamples.href}#${USAGE_EXAMPLE_KEYS.FORM_WITH_STEPS}`,
          },
        },
        {
          title: "basic-conditions.tsx",
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsExamples.href}#${USAGE_EXAMPLE_KEYS.CONDITIONS}`,
          },
        },
        {
          title: "form-conditions.tsx",
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsExamples.href}#${USAGE_EXAMPLE_KEYS.FORM_CONDITIONS}`,
          },
        },
        {
          title: "input-example.tsx",
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsExamples.href}#${USAGE_EXAMPLE_KEYS.INPUT}`,
          },
        },
        {
          title: "select-example.tsx",
          metadata: {
            icon: File,
            href: `${NAV_ITEMS.docsExamples.href}#${USAGE_EXAMPLE_KEYS.SELECT}`,
          },
        },
        {
          title: "ui",
          open: true,
          children: [
            {
              title: "input.tsx",
              metadata: {
                icon: File,
                href: `${NAV_ITEMS.docsExamples.href}#${USAGE_EXAMPLE_KEYS.INPUT_FIELD}`,
              },
            },
            {
              title: "select.tsx",
              metadata: {
                icon: File,
                href: `${NAV_ITEMS.docsExamples.href}#${USAGE_EXAMPLE_KEYS.SELECT_FIELD}`,
              },
            },
          ],
        },
      ],
    },
    REACT_DYNAMIC_FIELDS_SCHEMA_DOCS_SIDEBAR_TREE,
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
                    <Link href={item.href} className="flex items-center gap-2">
                      {item.icon && <item.icon />}
                      {item.title}
                    </Link>
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
      <SidebarMenuButton
        asChild
        className="data-[active=true]:bg-transparent text-balance"
      >
        {metadata?.href ? (
          <a href={metadata.href} className="flex items-center gap-2 h-auto ">
            <Icon />
            <p className="break-all">{title}</p>
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
            <ChevronRight className="transition-transform text-balance" />
            <Icon />
            {title}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {children.map((subItem: any, index: number) => (
              <Tree key={index} item={subItem} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
