import { CodeBlock } from "@/components/ui/code-block";
import { CopyButton } from "@/components/ui/copy-button";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Build Brand Trust",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
  {
    icon: "LineChart",
    title: "More Leads",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, natus consectetur.",
  },
  {
    icon: "Wallet",
    title: "Higher Conversions",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur. A odio velit cum aliquam",
  },
  {
    icon: "Sparkle",
    title: "Test Marketing Ideas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
];

export const GetStartedSection = () => {
  return (
    <section id="installation">
      <h2 className="text-lg text-primary mb-2 tracking-wider">Installation</h2>
      <div className="flex justify-between items-center gap-3 flex-wrap">
        <CodeBlock code={"npm i react-dynamic-fields-core"} language={"jsx"} />
        <CopyButton value={"npm i react-dynamic-fields-core"} />
      </div>
      <div className="border-b border-secondary" />
      <div className="flex justify-between items-center gap-3 flex-wrap">
        <CodeBlock
          code={"yarn add react-dynamic-fields-core"}
          language={"jsx"}
        />
        <CopyButton value={"yarn add react-dynamic-fields-core"} />
      </div>
    </section>
  );
};
