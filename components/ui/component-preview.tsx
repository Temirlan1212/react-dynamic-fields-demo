"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./code-block";
import { CopyButton } from "./copy-button";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  preview: React.ReactNode;
  codeElement?: () => string;
}

export function ComponentPreview({
  preview,
  className,
  codeElement: CodeElement,
  ...props
}: ComponentPreviewProps) {
  const code = (CodeElement && CodeElement()) || "";
  const language = "jsx";
  return (
    <div
      className={cn("my-4 flex flex-col space-y-4 relative", className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="flex border-b w-fit">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="p-4 border rounded-md">
          {preview}
        </TabsContent>

        <TabsContent value="code" className="border rounded-md">
          <div className="max-h-[500px] overflow-y-auto">
            <CodeBlock code={code} language={language} />
          </div>

          <CopyButton
            className="rounded-full px-3.5 py-1.5 absolute top-2 right-2"
            value={code}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
