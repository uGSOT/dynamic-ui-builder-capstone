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
    cardBg: { type: "string", default: "bg-surface-muted" },
    cardTextColor: { type: "string", default: "text-ink" },
    cardTitleWeight: { type: "string", default: "font-bold" }
  }
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