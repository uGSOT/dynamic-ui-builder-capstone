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
  subheading: "Find quick answers across our most common topics.",
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
      description: "Section title above the columns",
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
      allowedValues:
        "Array of question/answer objects (split evenly across columns)",
      description: "FAQ entries distributed between left and right columns",
    },
    {
      name: "defaultOpenIndex",
      type: "number",
      default: defaultProps.defaultOpenIndex,
      allowedValues: "0 … items.length − 1, or −1 for all closed",
      description: "Global index of the item expanded on first render",
    },
  ],
  styles: FAQ_STYLE_PROP_SCHEMA,
};

function AccordionColumn({ items, startIndex, openIndex, onToggle, inverted }) {
  return (
    <div>
      {items.map((item, index) => {
        const globalIndex = startIndex + index;
        return (
          <FaqAccordionItem
            key={`${item.question}-${globalIndex}`}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === globalIndex}
            onToggle={() => onToggle(globalIndex)}
            inverted={inverted}
          />
        );
      })}
    </div>
  );
}

export default function AccordionTwoColumn({
  heading = defaultProps.heading,
  subheading = defaultProps.subheading,
  items = defaultProps.items,
  defaultOpenIndex = defaultProps.defaultOpenIndex,
  styles = defaultStyles,
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const { className, inverted } = resolveFaqStyles(styles);
  const midpoint = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midpoint);
  const rightItems = items.slice(midpoint);

  const handleToggle = (globalIndex) => {
    setOpenIndex((current) => (current === globalIndex ? -1 : globalIndex));
  };

  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <FaqSectionHeader
          heading={heading}
          subheading={subheading}
          inverted={inverted}
        />
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <AccordionColumn
            items={leftItems}
            startIndex={0}
            openIndex={openIndex}
            onToggle={handleToggle}
            inverted={inverted}
          />
          <AccordionColumn
            items={rightItems}
            startIndex={midpoint}
            openIndex={openIndex}
            onToggle={handleToggle}
            inverted={inverted}
          />
        </div>
      </div>
    </section>
  );
}
