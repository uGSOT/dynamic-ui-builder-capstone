import React from "react";
import { DEFAULT_SOCIAL_PROOF_HERO_PROPS } from "../defaultProps";
import {
  HERO_STYLE_DEFAULTS,
  HERO_STYLE_PROP_SCHEMA,
  resolveHeroStyles,
} from "../heroStyles";
import HeroSectionHeader from "../HeroSectionHeader";

export const defaultProps = {
  ...DEFAULT_SOCIAL_PROOF_HERO_PROPS,
};

export const defaultStyles = { 
  ...HERO_STYLE_DEFAULTS,
  headingAlign: "center",
};

export const propSchema = {
  props: [
    {
      name: "heading",
      type: "string",
      default: defaultProps.heading,
      allowedValues: "Any string",
      description: "Main title text",
    },
    {
      name: "subheading",
      type: "string",
      default: defaultProps.subheading,
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
      allowedValues: "Valid image URL (optional)",
      description: "Optional product screenshot or feature image",
    },
    {
      name: "socialProofText",
      type: "string",
      default: defaultProps.socialProofText,
      allowedValues: "Any string",
      description: "Supporting text displayed next to the avatar stack",
    },
    {
      name: "socialProofAvatars",
      type: "Array<string>",
      default: defaultProps.socialProofAvatars,
      allowedValues: "Array of image URLs",
      description: "Overlapping user avatars to show social proof",
    },
  ],
  styles: HERO_STYLE_PROP_SCHEMA,
};

function WithSocialProof({
  heading = defaultProps.heading,
  subheading = defaultProps.subheading,
  primaryAction = defaultProps.primaryAction,
  secondaryAction = defaultProps.secondaryAction,
  imageUrl = defaultProps.imageUrl,
  badge = defaultProps.badge,
  socialProofText = defaultProps.socialProofText,
  socialProofAvatars = defaultProps.socialProofAvatars,
  styles = defaultStyles,
}) {
  const {
    sectionClass,
    headingClass,
    subheadingClass,
    accent
  } = resolveHeroStyles(styles);

  const ringClass = "ring-white";

  const primaryBtnClass = `${accent.bg} text-white hover:opacity-90`;
  const secondaryBtnClass = `border ${accent.border} ${accent.text} hover:opacity-90`;

  return (
    <section className={`text-center transition-colors duration-200 ${sectionClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <HeroSectionHeader
            heading={heading}
            subheading={subheading}
            headingClass={headingClass}
            subheadingClass={subheadingClass}
            subheadingWrapperClass="mx-auto mt-6 max-w-2xl"
          />

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

          {/* Social Proof Row */}
          {(socialProofText || (socialProofAvatars && socialProofAvatars.length > 0)) && (
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              {socialProofAvatars && socialProofAvatars.length > 0 && (
                <div className="flex -space-x-2 overflow-hidden">
                  {socialProofAvatars.map((url, i) => (
                    <img
                      key={i}
                      className={`inline-block h-9 w-9 rounded-full ring-2 ${ringClass}`}
                      src={url}
                      alt=""
                    />
                  ))}
                </div>
              )}
              {socialProofText && (
                <p className={`text-sm font-medium ${accent.text}`}>
                  {socialProofText}
                </p>
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

export default WithSocialProof;
