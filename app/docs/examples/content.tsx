"use client";

import { GetStartedSection } from "@/components/layout/sections/installation";
import {
  ComponentPreview,
  ComponentPreviewProps,
} from "@/components/ui/component-preview";
import { USAGE_EXAMPLES } from "@/components/usage-examples";
import { useHash } from "@/hooks/use-hash";
import { useIsMounted } from "@/hooks/use-is-mounted";

export function Content() {
  const hash = useHash();
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return (
    <>
      <GetStartedSection />

      <h2 className="text-xl">Example: {hash}</h2>

      {Object.entries(USAGE_EXAMPLES).map(([key, example]) => {
        if (key === hash || !hash) {
          const tabs: ComponentPreviewProps["tabs"] = [];
          if (example.component != null)
            tabs.push({
              type: "node",
              content: example.component,
              tabTitle: "Preview",
              tabValue: "preview",
              title: example.title,
              description: example.description,
            });

          return (
            <ComponentPreview
              key={key}
              tabs={[
                ...tabs,
                {
                  type: "code",
                  content: example.code,
                  tabTitle: "Code",
                  tabValue: example.title || "code-block",
                  description:
                    example.description ||
                    "You can see code block of preview tab",
                },
              ]}
            />
          );
        }
      })}
    </>
  );
}
