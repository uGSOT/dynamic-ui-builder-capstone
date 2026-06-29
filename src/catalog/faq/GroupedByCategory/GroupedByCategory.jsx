import { useState } from "react";
import FaqSectionHeader from "../FaqSectionHeader";
import FaqAccordionItem from "../FaqAccordionItem";
import {
  FAQ_STYLE_DEFAULTS,
  FAQ_STYLE_PROP_SCHEMA,
  resolveFaqStyles,
} from "../faqStyles";
import { SAMPLE_FAQ_CATEGORIES } from "../defaultProps";

export const defaultProps = {
  heading: "Frequently asked questions",
  subheading: "Organized by topic for enterprise and compliance-focused products.",
  categories: SAMPLE_FAQ_CATEGORIES,
  defaultOpenKey: "0-0",
};

export const defaultStyles = { ...FAQ_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    {
      name: "heading",
      type: "string",
      default: defaultProps.heading,
      allowedValues: "Any string",
      description: "Section title above the categories",
    },
    {
      name: "subheading",
      type: "string",
      default: defaultProps.subheading,
      allowedValues: 'Any string (use "" to hide)',
      description: "Supporting text below the heading",
    },
    {
      name: "categories",
      type: "Array<{ name: string, items: Array<{ question: string, answer: string }> }>",
      default: defaultProps.categories,
      allowedValues: "Array of category groups, each with a name and items array",
      description: "FAQ content grouped under category headings",
    },
    {
      name: "defaultOpenKey",
      type: "string",
      default: defaultProps.defaultOpenKey,
      allowedValues: '"{categoryIndex}-{itemIndex}" (e.g. "0-0"), or "" for all closed',
      description: "Key of the accordion item open on first render",
    },
  ],
  styles: FAQ_STYLE_PROP_SCHEMA,
};

export default function GroupedByCategory({
  heading        = defaultProps.heading,
  subheading     = defaultProps.subheading,
  categories     = defaultProps.categories,
  defaultOpenKey = defaultProps.defaultOpenKey,
  styles         = defaultStyles,
}) {
  const [openKey, setOpenKey] = useState(defaultOpenKey);

  const {
    sectionClass,
    headingAlign,
    headingClass,
    subheadingClass,
    questionClass,
    answerClass,
    borderClass,
    accentClass,
    categoryClass,
    categoryBorderClass,
  } = resolveFaqStyles(styles);

  return (
    <section className={sectionClass}>
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">

        <FaqSectionHeader
          heading={heading}
          subheading={subheading}
          align={headingAlign}
          headingClass={headingClass}
          subheadingClass={subheadingClass}
        />

        <div className="space-y-10">
          {categories.map((category, categoryIndex) => (
            <div key={category.name}>

              <h3 className={`mb-4 border-b pb-3 ${categoryClass} ${categoryBorderClass}`}>
                {category.name}
              </h3>

              <div>
                {category.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`;
                  return (
                    <FaqAccordionItem
                      key={key}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openKey === key}
                      onToggle={() =>
                        setOpenKey((current) => (current === key ? "" : key))
                      }
                      questionClass={questionClass}
                      answerClass={answerClass}
                      borderClass={borderClass}
                      accentClass={accentClass}
                    />
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}