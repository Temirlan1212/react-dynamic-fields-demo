"use client";

import {
  REACT_DYNAMIC_FIELDS_SCHEMA_DOCS_EXAMPLES,
  REACT_DYNAMIC_FIELDS_SCHEMA_DOCS_EXAMPLES_KEYS,
} from "@/components/docs";
import { GetStartedSection } from "@/components/layout/sections/installation";
import { ComponentPreview } from "@/components/ui/component-preview";
import {} from "@/components/usage-examples";
import { useIsMounted } from "@/hooks/use-is-mounted";

export function Content() {
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return (
    <div className="">
      <GetStartedSection />

      <h1 className="text-3xl font-semibold mb-6 mt-12">
        ReactDynamicFieldsSchema Documentation
      </h1>
      <p className="text-lg mb-4">
        This documentation covers various types used in the
        `ReactDynamicFieldsSchema` for dynamic form generation, validation, and
        styling.
      </p>

      {Object.keys(REACT_DYNAMIC_FIELDS_SCHEMA_DOCS_EXAMPLES).map((key) => {
        const example =
          REACT_DYNAMIC_FIELDS_SCHEMA_DOCS_EXAMPLES[
            key as keyof typeof REACT_DYNAMIC_FIELDS_SCHEMA_DOCS_EXAMPLES
          ];

        return (
          <ComponentPreview
            id={key}
            key={`${key}-preview`}
            tabs={[
              {
                type: "code",
                content: example.code,
                tabTitle: "Code",
                tabValue: "code-block",
                description: example.description,
                title: example.title,
              },
            ]}
          />
        );
      })}
    </div>
  );
}
