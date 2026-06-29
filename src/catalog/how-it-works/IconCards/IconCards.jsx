import React from "react";
import * as LucideIcons from "lucide-react";

export const defaultProps = {
  heading: "Built for speed and consistency",
  subheading: "Every site shares the same design tokens and predictable API layout.",
  items: [
    { step: "01", title: "Instant preview", description: "Changes reflect in under 100ms. No deploy step, no waiting.", icon: "Zap" },
    { step: "02", title: "37 curated variants", description: "Every section type startups need — hero through footer.", icon: "Layers" },
    { step: "03", title: "JSON source of truth", description: "Declarative configs you own. Import, export, version control.", icon: "Code2" }
  ]
};

export const defaultStyles = {
  background: "surface",
  paddingY: 16,
  headingColor: "text-text",
  headingSize: "text-3xl",
  headingWeight: "font-bold",
  subheadingColor: "text-ink-muted",
  subheadingSize: "text-base",
  subheadingWeight: "font-normal",
  cardBg: "bg-surface",
  cardTextColor: "text-text",
  cardTitleWeight: "font-bold"
};

export const propSchema = {
  props: [
    { name: "heading", type: "string", default: defaultProps.heading, allowedValues: "Any string", description: "Main section title text" },
    { name: "subheading", type: "string", default: defaultProps.subheading, allowedValues: "Any string (optional)", description: "Supporting structural description subtext" },
    { name: "items", type: "Array", default: "[3 cards layout]", allowedValues: "Array of block items containing step, title, description, and icon string identifier", description: "Process grid items decorated with accent graphics" }
  ],
  styles: [
    { name: "background", type: "string", default: defaultStyles.background, allowedValues: "surface | muted | navy", description: "Outer frame background design token selector" },
    { name: "paddingY", type: "number", default: defaultStyles.paddingY, allowedValues: "8 | 12 | 16 | 20", description: "Vertical section height spacing scale" },
    { name: "headingColor", type: "string", default: defaultStyles.headingColor, allowedValues: "Tailwind text class name", description: "Color assignment class rule for the heading" },
    { name: "headingSize", type: "string", default: defaultStyles.headingSize, allowedValues: "text-2xl | text-3xl | text-4xl | text-5xl", description: "Font size scale for main title element" },
    { name: "headingWeight", type: "string", default: defaultStyles.headingWeight, allowedValues: "font-normal | font-bold", description: "Font weight class config assignment" },
    { name: "subheadingColor", type: "string", default: defaultStyles.subheadingColor, allowedValues: "Tailwind text class name", description: "Color utility class for description paragraph" },
    { name: "subheadingSize", type: "string", default: defaultStyles.subheadingSize, allowedValues: "text-xs | text-sm | text-base | text-lg", description: "Font size token layout descriptor for subtext" },
    { name: "subheadingWeight", type: "string", default: defaultStyles.subheadingWeight, allowedValues: "font-light | font-normal", description: "Font structural weight configuration alignment" },
    { name: "cardBg", type: "string", default: defaultStyles.cardBg, allowedValues: "Tailwind background class name", description: "Container card background graphic style token" },
    { name: "cardTextColor", type: "string", default: defaultStyles.cardTextColor, allowedValues: "Tailwind text color utility", description: "Text color configuration inside card content elements" },
    { name: "cardTitleWeight", type: "string", default: defaultStyles.cardTitleWeight, allowedValues: "font-medium | font-bold", description: "Weight design rule applied onto card headings" }
  ]
};

export default function IconCards(componentData) {
  const activeProps = componentData?.props || componentData;
  const activeStyles = componentData?.styles || {};

  const { heading = "", subheading = "", items = [] } = activeProps || {};
  const {
    background = "surface",
    paddingY = 16,
    headingColor = "text-text",
    headingSize = "text-3xl",
    headingWeight = "font-bold",
    subheadingColor = "text-ink-muted",
    subheadingSize = "text-base",
    subheadingWeight = "font-normal",
    cardBg = "bg-surface",
    cardTextColor = "text-text",
    cardTitleWeight = "font-bold"
  } = activeStyles || {};

  const bgSectionClass = background === "navy" ? "bg-secondary text-white" : background === "muted" ? "bg-muted" : "bg-surface";

  return (
    <div className={`px-6 py-${paddingY} ${bgSectionClass} transition-all`}>
      <div className="mx-auto max-w-5xl text-center">
        {heading && <h2 className={`${headingSize} ${headingWeight} ${headingColor} tracking-tight`}>{heading}</h2>}
        {subheading && <p className={`mt-4 max-w-xl mx-auto ${subheadingSize} ${subheadingWeight} ${subheadingColor}`}>{subheading}</p>}

        <div className="grid gap-6 sm:grid-cols-3 mt-14">
          {items.map((item, idx) => {
            const IconComponent = LucideIcons[item.icon] || LucideIcons.Sparkles;
            
            return (
              <div key={idx} className={`flex flex-col items-start text-left rounded-2xl border border-border p-6 shadow-card transition-all ${background === "navy" ? "bg-navy-elevated border-border-dark" : cardBg}`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-muted text-primary mb-4">
                  <IconComponent size={20} />
                </div>
                <span className="text-xs font-bold uppercase text-primary tracking-widest">Step {item.step || `0${idx + 1}`}</span>
                <h3 className={`text-lg mt-1 ${cardTitleWeight} ${background === "navy" ? "text-white" : cardTextColor}`}>{item.title}</h3>
                <p className="mt-2 text-sm opacity-80">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}