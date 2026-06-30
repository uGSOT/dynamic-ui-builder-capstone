import React from "react";
import { FULL_WIDTH_CENTERED_PROPS } from "../defaultProps";
import { PROMO_STYLE_DEFAULTS, PROMO_STYLE_PROP_SCHEMA, resolvePromoStyles } from "../defaultStyles";

export const defaultProps = FULL_WIDTH_CENTERED_PROPS;
export const defaultStyles = { ...PROMO_STYLE_DEFAULTS, background: "muted", headingColor: "surface", subheadingColor: "muted" };

export const propSchema = {
  props: [
    { name: "heading", type: "string", default: defaultProps.heading, allowedValues: "Any string", description: "Main promotional title text" },
    { name: "subheading", type: "string", default: defaultProps.subheading, allowedValues: 'Any string (use "" to hide)', description: "Supporting description below the heading" },
    { name: "primaryAction", type: "object", default: defaultProps.primaryAction, allowedValues: "{ label: string, href: string }", description: "Primary CTA button" },
    { name: "secondaryAction", type: "object", default: defaultProps.secondaryAction, allowedValues: "{ label: string, href: string }", description: "Secondary CTA button" },
  ],
  styles: PROMO_STYLE_PROP_SCHEMA,
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
