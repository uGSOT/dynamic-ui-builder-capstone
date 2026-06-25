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
  cardBg: "bg-surface-muted",
  cardTextColor: "text-ink",
  cardTitleWeight: "font-bold"
};

export const propSchema = {
  // 💡 Mapped to exact array of schema objects layout
  props: [
    { name: "heading", type: "string", default: defaultProps.heading, allowedValues: "Any string", description: "Main section title text" },
    { name: "subheading", type: "string", default: defaultProps.subheading, allowedValues: "Any string (optional)", description: "Supporting structural description subtext" },
    { name: "items", type: "Array", default: "[3 steps layout]", allowedValues: "Array of step data objects containing step, title, and description", description: "Workflow process steps to map across columns" }
  ],
  styles: [
    { name: "background", type: "string", default: defaultStyles.background, allowedValues: "surface | muted | navy", description: "Outer frame background design token selector" },
    { name: "paddingY", type: "number", default: defaultStyles.paddingY, allowedValues: "8 | 12 | 16 | 20", description: "Vertical section height spacing scale" },
    { name: "headingColor", type: "string", default: defaultStyles.headingColor, allowedValues: "Tailwind text class name", description: "Color assignment class rule for the heading" },
    { name: "headingSize", type: "string", default: defaultStyles.headingSize, allowedValues: "text-2xl | text-3xl | text-4xl | text-5xl", description: "Font size scale for main title element" },
    { name: "headingWeight", type: "string", default: defaultStyles.headingWeight, allowedValues: "font-normal | font-medium | font-bold", description: "Font weight class config assignment" },
    { name: "subheadingColor", type: "string", default: defaultStyles.subheadingColor, allowedValues: "Tailwind text class name", description: "Color utility class for description paragraph" },
    { name: "subheadingSize", type: "string", default: defaultStyles.subheadingSize, allowedValues: "text-xs | text-sm | text-base | text-lg", description: "Font size token layout descriptor for subtext" },
    { name: "subheadingWeight", type: "string", default: defaultStyles.subheadingWeight, allowedValues: "font-light | font-normal | font-medium", description: "Font structural weight configuration alignment" },
    { name: "cardBg", type: "string", default: defaultStyles.cardBg, allowedValues: "Tailwind background class name", description: "Background theme container background utility token for step blocks" },
    { name: "cardTextColor", type: "string", default: defaultStyles.cardTextColor, allowedValues: "Tailwind text color utility", description: "Text color variable selector inside step block nodes" },
    { name: "cardTitleWeight", type: "string", default: defaultStyles.cardTitleWeight, allowedValues: "font-medium | font-semibold | font-bold", description: "Weight design rule applied onto step titles" }
  ]
};

export default function StepsHorizontal(componentData) {
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
    cardBg = "bg-surface-muted",
    cardTextColor = "text-ink",
    cardTitleWeight = "font-bold"
  } = activeStyles || {};

  const bgSectionClass = background === "navy" ? "bg-navy text-white" : background === "muted" ? "bg-surface-muted" : "bg-surface";

  return (
    <div className={`px-6 py-${paddingY} ${bgSectionClass} transition-all`}>
      <div className="mx-auto max-w-5xl text-center">
        {heading && <h2 className={`${headingSize} ${headingWeight} ${headingColor} tracking-tight`}>{heading}</h2>}
        {subheading && <p className={`mt-4 max-w-xl mx-auto ${subheadingSize} ${subheadingWeight} ${subheadingColor}`}>{subheading}</p>}
        
        <div className="grid gap-8 sm:grid-cols-3 mt-14 relative">
          {items.map((item, idx) => (
            <div key={idx} className={`relative flex flex-col items-center group p-6 rounded-xl ${background === "navy" ? "bg-navy-elevated" : cardBg}`}>
              {idx < items.length - 1 && (
                <div className="hidden sm:block absolute top-12 left-[70%] right-[-30%] h-[2px] bg-border/40" />
              )}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white font-bold text-base shadow-sm mb-4">
                {item.step || `0${idx + 1}`}
              </div>
              <h3 className={`text-lg ${cardTitleWeight} ${background === "navy" ? "text-white" : cardTextColor}`}>{item.title}</h3>
              <p className="mt-2 text-sm opacity-80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}