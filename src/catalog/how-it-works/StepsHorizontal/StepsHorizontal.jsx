import React from "react";
import { STEPS_HORIZONTAL_PROPS } from "../defaultProps";
import {
  HOW_IT_WORKS_STYLE_DEFAULTS,
  HOW_IT_WORKS_STYLE_PROP_SCHEMA,
  resolveHowItWorksStyles,
} from "../defaultStyles";

export const defaultProps = STEPS_HORIZONTAL_PROPS;
export const defaultStyles = { ...HOW_IT_WORKS_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    { name: "heading", type: "string", default: defaultProps.heading, allowedValues: "Any string", description: "Main section title text" },
    { name: "subheading", type: "string", default: defaultProps.subheading, allowedValues: 'Any string (use "" to hide)', description: "Supporting text below the heading" },
    { name: "items", type: "Array<{ step, title, description }>", default: defaultProps.items, allowedValues: "Array of step/title/description objects", description: "Steps rendered left-to-right with a connector line" },
  ],
  styles: HOW_IT_WORKS_STYLE_PROP_SCHEMA,
};

export default function StepsHorizontal({
  heading    = defaultProps.heading,
  subheading = defaultProps.subheading,
  items      = defaultProps.items,
  styles     = defaultStyles,
}) {
  const {
    sectionClass,
    headingAlign,
    headingClass,
    subheadingClass,
    cardClass,
    titleClass,
    descClass,
    accentBgClass,
  } = resolveHowItWorksStyles(styles);

  const alignClass = headingAlign === "left" ? "text-left" : headingAlign === "right" ? "text-right" : "text-center";

  return (
    <section className={sectionClass}>
      <div className={`mx-auto max-w-5xl ${alignClass}`}>
        {heading && <h2 className={headingClass}>{heading}</h2>}
        {subheading && <p className={`mt-4 max-w-xl mx-auto ${subheadingClass}`}>{subheading}</p>}

        <div className="mt-10 sm:mt-14 grid gap-6 sm:grid-cols-3 sm:gap-8 relative text-center">
          {items.map((item, idx) => (
            <div key={`${item.title}-${idx}`} className={`relative flex flex-col items-center ${cardClass}`}>
              {idx < items.length - 1 && (
                <div className="hidden sm:block absolute top-12 left-[70%] right-[-30%] h-[2px] bg-surface-border/40" />
              )}
              <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-base shadow-sm mb-4 ${accentBgClass}`}>
                {item.step || `0${idx + 1}`}
              </div>
              <h3 className={titleClass}>{item.title}</h3>
              <p className={`mt-2 ${descClass}`}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
