"use client";

import React from "react";
import { EXAMPLES } from "./constants";
import { ComponentPreview } from "@/components/ui/component-preview";

const Example = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-semibold mb-6">
        ReactDynamicFieldsSchema Documentation
      </h1>
      <p className="text-lg mb-4">
        This documentation covers various types used in the
        `ReactDynamicFieldsSchema` for dynamic form generation, validation, and
        styling.
      </p>

      {Object.keys(EXAMPLES).map((key) => {
        const example = EXAMPLES[key as keyof typeof EXAMPLES];
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
};

export default Example;
