"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/contacts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Try it out now! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Experience the
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                React Dynamic Fields
              </span>
              core
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Build dynamic, customizable forms with React Dynamic Fields core. It
            integrates seamlessly with React, react-hook-form, and Tailwind CSS,
            offering flexibility for creating complex forms with conditional
            fields and validation.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href={NAV_ITEMS.docsExamples.href}>
              <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                Examples
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href={NAV_ITEMS.docsSchemas.href}>Documentation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
