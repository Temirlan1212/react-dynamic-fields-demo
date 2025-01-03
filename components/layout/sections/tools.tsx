"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
interface ToolsProps {
  icon: string;
  name: string;
}

const tools: ToolsProps[] = [
  {
    icon: "Atom",
    name: "React",
  },
  {
    icon: "Vegan",
    name: "Typescript",
  },
  {
    icon: "Ghost",
    name: "Vite",
  },
  {
    icon: "Github",
    name: "Github",
  },
];

export const ToolsSection = () => {
  return (
    <section id="tools" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">Tools</h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {tools.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                color="white"
                className="mr-2"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
