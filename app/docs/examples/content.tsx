"use client";

import { GetStartedSection } from "@/components/layout/sections/installation";
import {
  ComponentPreview,
  ComponentPreviewProps,
} from "@/components/ui/component-preview";
import {
  USAGE_EXAMPLE_KEYS,
  USAGE_EXAMPLES,
} from "@/components/usage-examples";
import { useHash } from "@/hooks/use-hash";
import { useIsMounted } from "@/hooks/use-is-mounted";

const FIELDS_TABS: ComponentPreviewProps["tabs"] = [
  {
    type: "code",
    content: USAGE_EXAMPLES[USAGE_EXAMPLE_KEYS.INPUT_FIELD].code,
    tabTitle: "Input-field",
    tabValue: USAGE_EXAMPLE_KEYS.INPUT_FIELD || "code-block",
    description:
      USAGE_EXAMPLES[USAGE_EXAMPLE_KEYS.INPUT_FIELD].description ||
      "You can see code block of preview tab",
  },
  {
    type: "code",
    content: USAGE_EXAMPLES[USAGE_EXAMPLE_KEYS.SELECT_FIELD].code,
    tabTitle: "Select-field",
    tabValue: USAGE_EXAMPLE_KEYS.SELECT_FIELD || "code-block",
    description:
      USAGE_EXAMPLES[USAGE_EXAMPLE_KEYS.SELECT_FIELD].description ||
      "You can see code block of preview tab",
  },
];

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

          tabs.push({
            type: "code",
            content: example.code,
            tabTitle: "Code",
            tabValue: key || "code-block",
            title: example.title,
            description:
              example.description || "You can see code block of preview tab",
          });

          if (!FIELDS_TABS.map((field) => field.tabValue).includes(key))
            tabs.push(...FIELDS_TABS);

          return <ComponentPreview key={key} tabs={tabs} />;
        }
      })}
    </>
  );
}
