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
  headingColor: "text-ink",
  headingSize: "text-3xl",
  headingWeight: "font-bold",
  subheadingColor: "text-ink-muted",
  subheadingSize: "text-base",
  subheadingWeight: "font-normal",
  cardBg: "bg-surface",
  cardTextColor: "text-ink",
  cardTitleWeight: "font-bold"
};

export const propSchema = {
  props: {
    heading: { type: "string", default: defaultProps.heading },
    subheading: { type: "string", default: defaultProps.subheading },
    items: { type: "array", default: defaultProps.items }
  },
  styles: {
    background: { type: "string", default: "surface", allowedValues: ["surface", "muted", "navy"] },
    paddingY: { type: "number", default: 16, allowedValues: [8, 12, 16, 20] },
    headingColor: { type: "string", default: "text-ink" },
    headingSize: { type: "string", default: "text-3xl" },
    headingWeight: { type: "string", default: "font-bold" },
    subheadingColor: { type: "string", default: "text-ink-muted" },
    subheadingSize: { type: "string", default: "text-base" },
    subheadingWeight: { type: "string", default: "font-normal" },
    cardBg: { type: "string", default: "bg-surface" },
    cardTextColor: { type: "string", default: "text-ink" },
    cardTitleWeight: { type: "string", default: "font-bold" }
  }
};

export default function IconCards(componentData) {
  const activeProps = componentData?.props || componentData;
  const activeStyles = componentData?.styles || {};

  const { heading = "", subheading = "", items = [] } = activeProps || {};
  const {
    background = "surface",
    paddingY = 16,
    headingColor = "text-ink",
    headingSize = "text-3xl",
    headingWeight = "font-bold",
    subheadingColor = "text-ink-muted",
    subheadingSize = "text-base",
    subheadingWeight = "font-normal",
    cardBg = "bg-surface",
    cardTextColor = "text-ink",
    cardTitleWeight = "font-bold"
  } = activeStyles || {};

  const bgSectionClass = background === "navy" ? "bg-navy text-white" : background === "muted" ? "bg-surface-muted" : "bg-surface";

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
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-muted text-brand mb-4">
                  <IconComponent size={20} />
                </div>
                <span className="text-xs font-bold uppercase text-brand tracking-widest">Step {item.step || `0${idx + 1}`}</span>
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