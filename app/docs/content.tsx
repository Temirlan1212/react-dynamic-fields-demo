"use client";

import { GetStartedSection } from "@/components/layout/sections/installation";
import { useIsMounted } from "@/hooks/use-is-mounted";

export function Content() {
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return (
    <>
      <GetStartedSection />
    </>
  );
}
