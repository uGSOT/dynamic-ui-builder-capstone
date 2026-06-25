import React from "react";

export const defaultProps = {
  heading: "Gallery → JSON → Builder",
  subheading: "A connected workflow so you never write component JSON from scratch.",
  items: [
    { step: "01", title: "Explore the Gallery", description: "Browse component layout variants across section types." },
    { step: "02", title: "Copy component JSON", description: "Every tweak syncs to a live JSON data layout panel." },
    { step: "03", title: "Assemble in Builder", description: "Drop configurations into your application layout structure." }
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
  cardBg: "bg-transparent",
  cardTextColor: "text-ink",
  cardTitleWeight: "font-bold"
};

export const propSchema = {
  props: [
    { name: "heading", type: "string", default: defaultProps.heading, allowedValues: "Any string", description: "Main section title text" },
    { name: "subheading", type: "string", default: defaultProps.subheading, allowedValues: "Any string (optional)", description: "Supporting structural description subtext" },
    { name: "items", type: "Array", default: "[3 steps layout]", allowedValues: "Array of workflow card objects containing step, title, and description", description: "Timeline process items to map vertically" }
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
    { name: "cardBg", type: "string", default: defaultStyles.cardBg, allowedValues: "Tailwind background class name", description: "Background style rule configuration for stack blocks" },
    { name: "cardTextColor", type: "string", default: defaultStyles.cardTextColor, allowedValues: "Tailwind text color utility", description: "Text color variable selector inside process nodes" },
    { name: "cardTitleWeight", type: "string", default: defaultStyles.cardTitleWeight, allowedValues: "font-medium | font-bold", description: "Weight design rule applied onto vertical segment headers" }
  ]
};

export default function StepsVertical(componentData) {
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
    cardBg = "bg-transparent",
    cardTextColor = "text-ink",
    cardTitleWeight = "font-bold"
  } = activeStyles || {};

  const bgSectionClass = background === "navy" ? "bg-navy text-white" : background === "muted" ? "bg-surface-muted" : "bg-surface";

  return (
    <div className={`px-6 py-${paddingY} ${bgSectionClass} transition-all`}>
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          {heading && <h2 className={`${headingSize} ${headingWeight} ${headingColor} tracking-tight`}>{heading}</h2>}
          {subheading && <p className={`mt-4 max-w-xl mx-auto ${subheadingSize} ${subheadingWeight} ${subheadingColor}`}>{subheading}</p>}
        </div>

        <div className="max-w-2xl mx-auto space-y-6 relative before:absolute before:inset-0 before:left-[27px] before:w-[2px] before:bg-border/40">
          {items.map((item, idx) => (
            <div key={idx} className={`flex gap-6 relative p-4 rounded-xl ${background === "navy" ? "bg-navy-elevated/40" : cardBg}`}>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-muted text-brand font-bold text-lg border border-brand/20 relative z-10 bg-surface">
                {item.step || `0${idx + 1}`}
              </div>
              <div className="pt-2 text-left">
                <h3 className={`text-xl ${cardTitleWeight} ${background === "navy" ? "text-white" : cardTextColor}`}>{item.title}</h3>
                <p className="mt-2 text-base opacity-80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}