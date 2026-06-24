import { useState } from "react";
import FaqSectionHeader from "../FaqSectionHeader";
import FaqAccordionItem from "../FaqAccordionItem";
import {
  FAQ_STYLE_DEFAULTS,
  FAQ_STYLE_PROP_SCHEMA,
  resolveFaqStyles,
} from "../faqStyles";
import { SAMPLE_FAQ_ITEMS } from "../defaultProps";

export const defaultProps = {
  heading: "Frequently asked questions",
  subheading: "Everything you need to know about the product and billing.",
  items: SAMPLE_FAQ_ITEMS,
  defaultOpenIndex: 0,
};

export const defaultStyles = { ...FAQ_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    {
      name: "heading",
      type: "string",
      default: defaultProps.heading,
      allowedValues: "Any string",
      description: "Section title above the accordion",
    },
    {
      name: "subheading",
      type: "string",
      default: defaultProps.subheading,
      allowedValues: 'Any string (use "" to hide)',
      description: "Supporting text below the heading",
    },
    {
      name: "items",
      type: "Array<{ question: string, answer: string }>",
      default: defaultProps.items,
      allowedValues: "Array of question/answer objects",
      description: "FAQ entries shown in a single column",
    },
    {
      name: "defaultOpenIndex",
      type: "number",
      default: defaultProps.defaultOpenIndex,
      allowedValues: "0 … items.length − 1, or −1 for all closed",
      description: "Which item is expanded on first render",
    },
  ],
  styles: FAQ_STYLE_PROP_SCHEMA,
};

export default function AccordionSingle({
  heading = defaultProps.heading,
  subheading = defaultProps.subheading,
  items = defaultProps.items,
  defaultOpenIndex = defaultProps.defaultOpenIndex,
  styles = defaultStyles,
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const { className, inverted } = resolveFaqStyles(styles);

  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <FaqSectionHeader
          heading={heading}
          subheading={subheading}
          inverted={inverted}
        />
        <div>
          {items.map((item, index) => (
            <FaqAccordionItem
              key={`${item.question}-${index}`}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
              inverted={inverted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
