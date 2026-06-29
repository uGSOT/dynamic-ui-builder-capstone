import React from "react";
import { DEFAULT_CENTERED_HERO_PROPS } from "../defaultProps";
import {
  STYLE_DEFAULTS,
  STYLE_PROP_SCHEMA,
  resolveStyles,
} from "../../../utils/resolveStyles";

export const defaultProps = {
  ...DEFAULT_CENTERED_HERO_PROPS,
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
      description: "Main Call-to-Action",
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
      description: "Small supporting text above or below the content",
    },
    {
      name: "imageUrl",
      type: "string",
      default: defaultProps.imageUrl,
      allowedValues: "Valid image URL (optional)",
      description: "Optional product screenshot or feature image",
    },
  ],
  styles: STYLE_PROP_SCHEMA,
};

function Centered({
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

  const primaryBtnClass = `${accent.bg} text-white hover:opacity-90`;
  const secondaryBtnClass = `border ${accent.border} ${accent.text} hover:opacity-90`;

  return (
    <section className={`text-center transition-colors duration-200 ${sectionClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className={headingClass}>
            {headline}
          </h1>
          {subtext && (
            <p className={`mx-auto mt-6 max-w-2xl ${subheadingClass}`}>
              {subtext}
            </p>
          )}

          {(primaryAction?.label || secondaryAction?.label) && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
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

          {badge && (
            <p className={`mt-5 text-xs font-medium tracking-wide sm:text-sm ${accent.text}`}>
              {badge}
            </p>
          )}

          {imageUrl && (
            <div className="mt-12 overflow-hidden rounded-xl border border-border/10 bg-white shadow-md">
              <img
                src={imageUrl}
                alt=""
                className="w-full max-w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Centered;