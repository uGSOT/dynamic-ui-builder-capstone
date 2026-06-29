import React from "react";
import { DEFAULT_SPLIT_HERO_PROPS } from "../defaultProps";
import {
  HERO_STYLE_DEFAULTS,
  HERO_STYLE_PROP_SCHEMA,
  resolveHeroStyles,
} from "../heroStyles";

export const defaultProps = {
  ...DEFAULT_SPLIT_HERO_PROPS,
};

export const defaultStyles = { ...HERO_STYLE_DEFAULTS };

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
      description: "Product screenshot or feature image to render on the left",
    },
  ],
  styles: HERO_STYLE_PROP_SCHEMA,
};

function SplitImageLeft({
  headline = defaultProps.headline,
  subtext = defaultProps.subtext,
  primaryAction = defaultProps.primaryAction,
  secondaryAction = defaultProps.secondaryAction,
  imageUrl = defaultProps.imageUrl,
  badge = defaultProps.badge,
  styles = defaultStyles,
}) {
  const { className, inverted } = resolveHeroStyles(styles);

  const titleClass = inverted ? "text-ink-inverse" : "text-text";
  const subtitleClass = inverted ? "text-ink-inverse-muted" : "text-ink-muted";
  const badgeTextClass = inverted ? "text-brand-light bg-brand-muted/10" : "text-primary bg-brand-muted";

  const primaryBtnClass = inverted
    ? "bg-primary text-ink-inverse hover:bg-brand-light"
    : "bg-primary text-ink-inverse hover:bg-primary-dark";
  const secondaryBtnClass = inverted
    ? "border border-border-dark text-ink-inverse hover:bg-navy-elevated"
    : "border border-border text-text hover:bg-muted";

  return (
    <section className={`transition-colors duration-200 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image on Desktop, Stacked second on Mobile */}
          {imageUrl && (
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-border/10 bg-surface shadow-card transition-transform duration-300 hover:scale-[1.01]">
                <img
                  src={imageUrl}
                  alt="Product screenshot"
                  className="w-full max-w-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Right Column: Content on Desktop, Stacked first on Mobile */}
          <div className={`text-left order-1 lg:order-2 ${!imageUrl ? "lg:col-span-2 max-w-3xl mx-auto text-center" : ""}`}>
            {badge && (
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase ${badgeTextClass}`}>
                {badge}
              </span>
            )}
            <h1 className={`mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ${titleClass}`}>
              {headline}
            </h1>
            {subtext && (
              <p className={`mt-6 text-base leading-relaxed sm:text-lg ${subtitleClass}`}>
                {subtext}
              </p>
            )}

            {(primaryAction?.label || secondaryAction?.label) && (
              <div className={`mt-8 flex flex-wrap gap-4 ${!imageUrl ? "justify-center" : ""}`}>
                {primaryAction?.label && (
                  <a
                    href={primaryAction.href || "#"}
                    className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${primaryBtnClass}`}
                  >
                    {primaryAction.label}
                  </a>
                )}
                {secondaryAction?.label && (
                  <a
                    href={secondaryAction.href || "#"}
                    className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${secondaryBtnClass}`}
                  >
                    {secondaryAction.label}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SplitImageLeft;
