import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is this package free?",
    answer: "Yes. It is a free package.",
    value: "item-1",
  },
  {
    question: "What is react-dynamic-fields-core?",
    answer:
      "It is a library for generating dynamic forms using React, react-hook-form, and Tailwind CSS with support for conditional fields and extensible field types.",
    value: "item-2",
  },
  {
    question: "How do I install the package?",
    answer:
      "You can install the package using npm or yarn. Run `npm install react-dynamic-fields-core` or `yarn add react-dynamic-fields-core` in your project.",
    value: "item-3",
  },
  {
    question: "Can I use custom styles?",
    answer:
      "Absolutely! You can customize styles using Tailwind CSS or any CSS framework of your choice.",
    value: "item-5",
  },
  {
    question: "Does it support conditional logic?",
    answer:
      "Yes. Fields can have conditional logic to dynamically change their visibility, validation rules, or styles based on the value of other fields.",
    value: "item-7",
  },
  {
    question: "Is it compatible with TypeScript?",
    answer:
      "Yes. The library is built with TypeScript, ensuring strong typing and better developer experience.",
    value: "item-8",
  },
  {
    question: "How do I contribute to the library?",
    answer:
      "Contributions are welcome! You can fork the GitHub repository, make your changes, and submit a pull request. Please check the contribution guidelines in the repository.",
    value: "item-10",
  },
  {
    question: "Are there any examples or documentation?",
    answer:
      "Yes. Comprehensive examples and documentation are available in the GitHub repository and official documentation site.",
    value: "item-11",
  },
  {
    question: "Can I use this library with other UI frameworks?",
    answer:
      "Yes. While it is optimized for Tailwind CSS, you can use it with any UI framework by customizing the styles.",
    value: "item-13",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
