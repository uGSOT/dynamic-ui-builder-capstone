import React from "react";
import * as LucideIcons from "lucide-react";
import { ICON_CARDS_PROPS } from "../defaultProps";
import {
  HOW_IT_WORKS_STYLE_DEFAULTS,
  HOW_IT_WORKS_STYLE_PROP_SCHEMA,
  resolveHowItWorksStyles,
} from "../defaultStyles";

export const defaultProps = ICON_CARDS_PROPS;
export const defaultStyles = { ...HOW_IT_WORKS_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    { name: "heading", type: "string", default: defaultProps.heading, allowedValues: "Any string", description: "Main section title text" },
    { name: "subheading", type: "string", default: defaultProps.subheading, allowedValues: 'Any string (use "" to hide)', description: "Supporting text below the heading" },
    { name: "items", type: "Array<{ step, title, description, icon }>", default: defaultProps.items, allowedValues: "Array of step/title/description/icon objects (icon = lucide-react icon name)", description: "Cards rendered in a 3-column grid" },
  ],
  styles: HOW_IT_WORKS_STYLE_PROP_SCHEMA,
};

export default function IconCards({
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
    iconWrapClass,
    iconColorClass,
    iconPx,
    accentTextClass,
  } = resolveHowItWorksStyles(styles);

  const alignClass = headingAlign === "left" ? "text-left" : headingAlign === "right" ? "text-right" : "text-center";

  return (
    <section className={sectionClass}>
      <div className={`mx-auto max-w-5xl ${alignClass}`}>
        {heading && <h2 className={headingClass}>{heading}</h2>}
        {subheading && <p className={`mt-4 max-w-xl mx-auto ${subheadingClass}`}>{subheading}</p>}

        <div className="grid gap-6 sm:grid-cols-3 mt-14 text-left">
          {items.map((item, idx) => {
            const IconComponent = LucideIcons[item.icon] || LucideIcons.Sparkles;
            return (
              <div key={`${item.title}-${idx}`} className={cardClass}>
                <div className={`${iconWrapClass} mb-4`}>
                  <IconComponent size={iconPx} className={iconColorClass} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${accentTextClass}`}>
                  Step {item.step || `0${idx + 1}`}
                </span>
                <h3 className={`mt-1 ${titleClass}`}>{item.title}</h3>
                <p className={`mt-2 ${descClass}`}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
