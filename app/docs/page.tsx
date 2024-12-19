import {
  HeroSection,
  HeroSectionCode,
} from "@/components/layout/sections/hero";
import { ComponentPreview } from "@/components/ui/component-preview";
import {
  ReactDynamicFieldsBasicExample,
  ReactDynamicFieldsBasicExampleCode,
} from "@/components/usage-examples/react-dynamic-fields-basic";

export const metadata = {
  title: "Shadcn - Landing template",
  description: "Free Shadcn landing page for developers",
};

export default async function Home() {
  return (
    <>
      <ComponentPreview
        preview={<ReactDynamicFieldsBasicExample />}
        codeElement={ReactDynamicFieldsBasicExampleCode}
      />
      {/* <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection /> */}
    </>
  );
}
