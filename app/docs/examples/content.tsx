"use client";

import { REACT_DYNAMIC_FIELDS_SCHEMA_DOCS_EXAMPLES } from "@/components/docs";
import { GetStartedSection } from "@/components/layout/sections/installation";
import { ComponentPreview } from "@/components/ui/component-preview";
import {
  USAGE_EXAMPLE_KEYS,
  USAGE_EXAMPLES,
} from "@/components/usage-examples";
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
        if (key === hash || !hash)
          return (
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
          );
      })}
    </>
  );
}
