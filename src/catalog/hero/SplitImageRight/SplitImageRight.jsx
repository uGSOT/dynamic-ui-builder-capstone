import React from "react";
import { DEFAULT_SPLIT_HERO_PROPS } from "../defaultProps";
import {
  STYLE_DEFAULTS,
  STYLE_PROP_SCHEMA,
  resolveStyles,
} from "../../../utils/resolveStyles";

export const defaultProps = {
  ...DEFAULT_SPLIT_HERO_PROPS,
};

export const defaultStyles = { ...STYLE_DEFAULTS };

export const propSchema = {
  props: [
    {
      name: "headline",
      type: "string",
      default: defaultProps.headline,
      allowedValues: "Any string",
      description: "Main title text",
    },
    {
      name: "subtext",
      type: "string",
      default: defaultProps.subtext,
      allowedValues: "Any string",
      description: "Supporting description text",
    },
    {
      name: "primaryAction",
      type: "object",
      default: defaultProps.primaryAction,
      allowedValues: "Object with label and href",
      description: "Primary Call-to-Action",
    },
    {
      name: "secondaryAction",
      type: "object",
      default: defaultProps.secondaryAction,
      allowedValues: "Object with label and href",
      description: "Secondary Call-to-Action",
    },
    {
      name: "badge",
      type: "string",
      default: defaultProps.badge,
      allowedValues: "Any string (optional)",
      description: "Small supporting text above the content",
    },
    {
      name: "imageUrl",
      type: "string",
      default: defaultProps.imageUrl,
      allowedValues: "Valid image URL",
      description: "Product screenshot or feature image to render on the right",
    },
  ],
  styles: STYLE_PROP_SCHEMA,
};

function SplitImageRight({
  headline = defaultProps.headline,
  subtext = defaultProps.subtext,
  primaryAction = defaultProps.primaryAction,
  secondaryAction = defaultProps.secondaryAction,
  imageUrl = defaultProps.imageUrl,
  badge = defaultProps.badge,
  styles = defaultStyles,
}) {
  const {
    sectionClass,
    headingClass,
    subheadingClass,
    accent
  } = resolveStyles(styles);

  const badgeTextClass = `${accent.text} ${accent.bg}/10`;

  const primaryBtnClass = `${accent.bg} text-white hover:opacity-90`;
  const secondaryBtnClass = `border ${accent.border} ${accent.text} hover:opacity-90`;

  return (
    <section className={`transition-colors duration-200 ${sectionClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="text-left">
            {badge && (
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase ${badgeTextClass}`}>
                {badge}
              </span>
            )}
            <h1 className={`mt-6 ${headingClass}`}>
              {headline}
            </h1>
            {subtext && (
              <p className={`mt-6 ${subheadingClass}`}>
                {subtext}
              </p>
            )}

            {(primaryAction?.label || secondaryAction?.label) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {primaryAction?.label && (
                  <a
                    href={primaryAction.href || "#"}
                    className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 ${primaryBtnClass}`}
                  >
                    {primaryAction.label}
                  </a>
                )}
                {secondaryAction?.label && (
                  <a
                    href={secondaryAction.href || "#"}
                    className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 ${secondaryBtnClass}`}
                  >
                    {secondaryAction.label}
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Image */}
          {imageUrl && (
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border/10 bg-white shadow-md transition-transform duration-300 hover:scale-[1.01]">
                <img
                  src={imageUrl}
                  alt="Product screenshot"
                  className="w-full max-w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SplitImageRight;
