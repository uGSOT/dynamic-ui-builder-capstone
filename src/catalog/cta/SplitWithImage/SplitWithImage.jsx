import React from "react";
import { SPLIT_WITH_IMAGE_PROPS } from "../defaultProps";
import { PROMO_STYLE_DEFAULTS, PROMO_STYLE_PROP_SCHEMA, resolvePromoStyles } from "../defaultStyles";

export const defaultProps = SPLIT_WITH_IMAGE_PROPS;
export const defaultStyles = { ...PROMO_STYLE_DEFAULTS, background: "white" };

export const propSchema = {
  props: [
    { name: "heading", type: "string", default: defaultProps.heading, allowedValues: "Any string", description: "Main headline text" },
    { name: "subheading", type: "string", default: defaultProps.subheading, allowedValues: "Any string", description: "Supporting description text" },
    { name: "primaryAction", type: "object", default: defaultProps.primaryAction, allowedValues: "{ label: string, href: string }", description: "Primary CTA button" },
    { name: "imageUrl", type: "string", default: defaultProps.imageUrl, allowedValues: "Valid image URL", description: "Image shown in the split panel" },
  ],
  styles: PROMO_STYLE_PROP_SCHEMA,
};

export default function SplitWithImage({
  heading       = defaultProps.heading,
  subheading    = defaultProps.subheading,
  primaryAction = defaultProps.primaryAction,
  imageUrl      = defaultProps.imageUrl,
  styles        = defaultStyles,
}) {
  const { sectionClass, headingClass, subheadingClass, primaryBtnClass, imageWrapClass, imagePosition } = resolvePromoStyles(styles);
  const textOrderClass = imagePosition === "left" ? "lg:order-last" : "";

  return (
    <section className={sectionClass}>
      <div className="mx-auto max-w-5xl grid gap-12 items-center lg:grid-cols-2">
        <div className={`text-left space-y-6 ${textOrderClass}`}>
          {heading && <h2 className={headingClass}>{heading}</h2>}
          {subheading && <p className={subheadingClass}>{subheading}</p>}
          {primaryAction?.label && (
            <div>
              <a href={primaryAction.href || "#"} className={`inline-block ${primaryBtnClass}`}>
                {primaryAction.label}
              </a>
            </div>
          )}
        </div>
        {imageUrl && (
          <div className={`${imageWrapClass} aspect-[4/3]`}>
            <img src={imageUrl} alt="" className="h-full w-full object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
