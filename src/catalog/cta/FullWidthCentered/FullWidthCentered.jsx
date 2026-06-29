import React from "react";

export const defaultProps = {
  heading: "Ready to scale your UI creation workflow?",
  subheading: "Join over 2,000 teams building faster layout configurations without structural technical debt.",
  primaryAction: { label: "Get started for free", href: "#" },
  secondaryAction: { label: "Schedule a demo", href: "#" }
};

export const defaultStyles = {
  background: "navy",
  paddingY: 16,
  headingColor: "text-white",
  headingSize: "text-4xl",
  headingWeight: "font-extrabold",
  subheadingColor: "text-white/80",
  subheadingSize: "text-lg",
  subheadingWeight: "font-normal",
  buttonStyle: "brand"
};

export const propSchema = {
  props: [
    { name: "heading", type: "string", default: defaultProps.heading, allowedValues: "Any string", description: "Main promotional title text" },
    { name: "subheading", type: "string", default: defaultProps.subheading, allowedValues: "Any string (optional)", description: "Supporting structural contextual description paragraph" },
    { name: "primaryAction", type: "object", default: "{ label: 'Get started...', href: '#' }", allowedValues: "Object with label and href strings", description: "Primary CTA action trigger node configuration" },
    { name: "secondaryAction", type: "object", default: "{ label: 'Schedule...', href: '#' }", allowedValues: "Object with label and href strings", description: "Secondary CTA action trigger node configuration" }
  ],
  styles: [
    { name: "background", type: "string", default: defaultStyles.background, allowedValues: "surface | muted | navy", description: "Outer frame section background design token" },
    { name: "paddingY", type: "number", default: defaultStyles.paddingY, allowedValues: "8 | 12 | 16 | 20", description: "Vertical outer spacing layout scale value" },
    { name: "headingColor", type: "string", default: defaultStyles.headingColor, allowedValues: "Tailwind text class name", description: "Color assignment rules mapped onto main title tag" },
    { name: "headingSize", type: "string", default: defaultStyles.headingSize, allowedValues: "text-3xl | text-4xl | text-5xl", description: "Main typography presentation scale value" },
    { name: "headingWeight", type: "string", default: defaultStyles.headingWeight, allowedValues: "font-bold | font-extrabold", description: "Font weight scale assignment token rule" },
    { name: "subheadingColor", type: "string", default: defaultStyles.subheadingColor, allowedValues: "Tailwind text color utility", description: "Color utility assigned onto description text node" },
    { name: "subheadingSize", type: "string", default: defaultStyles.subheadingSize, allowedValues: "text-base | text-lg | text-xl", description: "Subtext typographic scale modifier" }
  ]
};

export default function FullWidthCentered(componentData) {
  const activeProps = componentData?.props || componentData;
  const activeStyles = componentData?.styles || {};

  const { heading = "", subheading = "", primaryAction, secondaryAction } = activeProps || {};
  const {
    background = "navy",
    paddingY = 16,
    headingColor = "text-white",
    headingSize = "text-4xl",
    headingWeight = "font-extrabold",
    subheadingColor = "text-white/80",
    subheadingSize = "text-lg",
  } = activeStyles || {};

  const bgSectionClass = background === "navy" ? "bg-secondary text-white" : background === "muted" ? "bg-muted" : "bg-surface";
  const primaryBtnClass = background === "navy" ? "bg-primary text-white hover:bg-primary/90" : "bg-primary text-white hover:bg-primary-dark";
  const secondaryBtnClass = background === "navy" ? "border border-white/20 text-white hover:bg-white/10" : "border border-border text-text hover:bg-muted";

  return (
    <div className={`px-6 py-${paddingY} ${bgSectionClass} text-center transition-all`}>
      <div className="mx-auto max-w-3xl">
        {heading && <h2 className={`${headingSize} ${headingWeight} ${headingColor} tracking-tight`}>{heading}</h2>}
        {subheading && <p className={`mt-4 max-w-xl mx-auto ${subheadingSize} ${subheadingColor} leading-relaxed`}>{subheading}</p>}
        
        {(primaryAction?.label || secondaryAction?.label) && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {primaryAction?.label && (
              <a href={primaryAction.href || "#"} className={`px-6 py-3 rounded-xl text-sm font-semibold shadow-sm transition-all ${primaryBtnClass}`}>
                {primaryAction.label}
              </a>
            )}
            {secondaryAction?.label && (
              <a href={secondaryAction.href || "#"} className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${secondaryBtnClass}`}>
                {secondaryAction.label}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}