"use client";

import { InstallationSection } from "@/components/layout/sections/installation";
import { ComponentPreview } from "@/components/ui/component-preview";
import { USAGE_EXAMPLES } from "@/components/usage-examples";
import { usePathname } from "next/navigation";

export function Content() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <InstallationSection />

      <h2 className="text-xl">Examples</h2>

      {Object.entries(USAGE_EXAMPLES).map(([key, example]) => (
        <ComponentPreview
          key={key}
          tabs={[
            {
              type: "node",
              content: example.component,
              tabTitle: "Preview",
              tabValue: "preview",
              title: example.title,
              description: example.description,
            },
            {
              type: "code",
              content: example.code,
              tabTitle: "Code",
              tabValue: "code-block",
              description: "You can see code block of preview tab",
            },
          ]}
        />
      ))}
    </>
  );
}
