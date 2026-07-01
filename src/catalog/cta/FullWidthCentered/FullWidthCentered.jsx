import React from "react";
import { FULL_WIDTH_CENTERED_PROPS } from "../defaultProps";
import { pickStyleSchema, resolvePromoStyles } from "../defaultStyles";

// Keys this component's resolver output actually consumes.
const STYLE_KEYS = [
  "background", "paddingY", "paddingX",
  "headingColor", "headingSize", "headingWeight",
  "subheadingColor", "subheadingSize", "subheadingWeight",
  "primaryButtonColor", "secondaryButtonColor",
];

// Only the keys this component uses — no unused keys from PROMO_STYLE_DEFAULTS.
export const defaultStyles = {
  background:          "muted",
  paddingY:             12,
  paddingX:              6,
  headingColor:         "surface",
  headingSize:          "3xl",
  headingWeight:        "extrabold",
  subheadingColor:      "muted",
  subheadingSize:        "lg",
  subheadingWeight:     "normal",
  primaryButtonColor:   "primary",
  secondaryButtonColor: "surface",
};

export const defaultProps = FULL_WIDTH_CENTERED_PROPS;

export const propSchema = {
  props: [
    { name: "heading",         type: "string", default: defaultProps.heading,         allowedValues: "Any string",                       description: "Main promotional title text" },
    { name: "subheading",      type: "string", default: defaultProps.subheading,      allowedValues: 'Any string (use "" to hide)',       description: "Supporting description below the heading" },
    { name: "primaryAction",   type: "object", default: defaultProps.primaryAction,   allowedValues: "{ label: string, href: string }",  description: "Primary CTA button" },
    { name: "secondaryAction", type: "object", default: defaultProps.secondaryAction, allowedValues: "{ label: string, href: string }",  description: "Secondary CTA button" },
  ],
  // pickStyleSchema filters to STYLE_KEYS and stamps each entry's default
  // with this component's actual value, not the global fallback.
  styles: pickStyleSchema(STYLE_KEYS, defaultStyles),
};

export default function FullWidthCentered({
  heading         = defaultProps.heading,
  subheading      = defaultProps.subheading,
  primaryAction   = defaultProps.primaryAction,
  secondaryAction = defaultProps.secondaryAction,
  styles          = defaultStyles,
}) {
  const { sectionClass, headingClass, subheadingClass, primaryBtnClass, secondaryBtnClass } = resolvePromoStyles(styles);

  return (
    <section className={`${sectionClass} text-center`}>
      <div className="mx-auto max-w-3xl">
        {heading && <h2 className={headingClass}>{heading}</h2>}
        {subheading && <p className={`mt-4 max-w-xl mx-auto ${subheadingClass}`}>{subheading}</p>}

        {(primaryAction?.label || secondaryAction?.label) && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {primaryAction?.label && (
              <a href={primaryAction.href || "#"} className={primaryBtnClass}>
                {primaryAction.label}
              </a>
            )}
            {secondaryAction?.label && (
              <a href={secondaryAction.href || "#"} className={secondaryBtnClass}>
                {secondaryAction.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
