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
    cardBg: { type: "string", default: "bg-transparent" },
    cardTextColor: { type: "string", default: "text-ink" },
    cardTitleWeight: { type: "string", default: "font-bold" }
  }
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