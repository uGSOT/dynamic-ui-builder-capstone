import React from "react";
import { STEPS_VERTICAL_PROPS } from "../defaultProps";
import {
  HOW_IT_WORKS_STYLE_DEFAULTS,
  HOW_IT_WORKS_STYLE_PROP_SCHEMA,
  resolveHowItWorksStyles,
} from "../defaultStyles";

export const defaultProps = STEPS_VERTICAL_PROPS;
export const defaultStyles = { ...HOW_IT_WORKS_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    { name: "heading", type: "string", default: defaultProps.heading, allowedValues: "Any string", description: "Main section title text" },
    { name: "subheading", type: "string", default: defaultProps.subheading, allowedValues: 'Any string (use "" to hide)', description: "Supporting text below the heading" },
    { name: "items", type: "Array<{ step, title, description }>", default: defaultProps.items, allowedValues: "Array of step/title/description objects", description: "Steps rendered top-to-bottom on a connecting timeline" },
  ],
  styles: HOW_IT_WORKS_STYLE_PROP_SCHEMA,
};

export default function StepsVertical({
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
    accentTextClass,
  } = resolveHowItWorksStyles(styles);

  const alignClass = headingAlign === "left" ? "text-left" : headingAlign === "right" ? "text-right" : "text-center";

  return (
    <section className={sectionClass}>
      <div className="mx-auto max-w-5xl">
        <div className={`mb-14 ${alignClass}`}>
          {heading && <h2 className={headingClass}>{heading}</h2>}
          {subheading && <p className={`mt-4 max-w-xl mx-auto ${subheadingClass}`}>{subheading}</p>}
        </div>

        <div className="max-w-2xl mx-auto space-y-6 relative before:absolute before:inset-0 before:left-[27px] before:w-[2px] before:bg-surface-border/40">
          {items.map((item, idx) => (
            <div key={`${item.title}-${idx}`} className={`flex gap-6 relative ${cardClass}`}>
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-bold text-lg border border-accent/20 relative z-10 bg-surface ${accentTextClass}`}>
                {item.step || `0${idx + 1}`}
              </div>
              <div className="pt-2 text-left">
                <h3 className={titleClass}>{item.title}</h3>
                <p className={`mt-2 ${descClass}`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
