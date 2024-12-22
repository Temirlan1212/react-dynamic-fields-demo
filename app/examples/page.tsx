import { InstallationSection } from "@/components/layout/sections/installation";
import { ComponentPreview } from "@/components/ui/component-preview";
import { USAGE_EXAMPLES } from "@/components/usage-examples";
import { Content } from "./content";

export const metadata = {
  title: "ReactDynamicFields - Examples",
  description: "Free react dynamic fields",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Content />
    </div>
  );
}
