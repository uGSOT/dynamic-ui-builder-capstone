import React from "react";
import { DEFAULT_CENTERED_HERO_PROPS } from "../defaultProps";
import {
  HERO_STYLE_DEFAULTS,
  HERO_STYLE_PROP_SCHEMA,
  resolveHeroStyles,
} from "../heroStyles";

export const defaultProps = {
  ...DEFAULT_CENTERED_HERO_PROPS,
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
  styles: HERO_STYLE_PROP_SCHEMA,
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
  const { className, inverted } = resolveHeroStyles(styles);

  const titleClass = inverted ? "text-ink-inverse" : "text-text";
  const subtitleClass = inverted ? "text-ink-inverse-muted" : "text-ink-muted";
  const badgeClass = inverted ? "text-ink-inverse-muted" : "text-ink-subtle";

  const primaryBtnClass = inverted
    ? "bg-primary text-ink-inverse hover:bg-brand-light"
    : "bg-primary text-ink-inverse hover:bg-primary-dark";
  const secondaryBtnClass = inverted
    ? "border border-border-dark text-ink-inverse hover:bg-navy-elevated"
    : "border border-border text-text hover:bg-muted";

  return (
    <section className={`text-center transition-colors duration-200 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className={`text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ${titleClass}`}>
            {headline}
          </h1>
          {subtext && (
            <p className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${subtitleClass}`}>
              {subtext}
            </p>
          )}

          {(primaryAction?.label || secondaryAction?.label) && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
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

          {badge && (
            <p className={`mt-5 text-xs font-medium tracking-wide sm:text-sm ${badgeClass}`}>
              {badge}
            </p>
          )}

          {imageUrl && (
            <div className="mt-12 overflow-hidden rounded-xl border border-border/10 bg-surface shadow-card">
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