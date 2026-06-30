// ─── Shared content defaults for the how-it-works family ──────────────────────
// IconCards, StepsHorizontal, StepsVertical all consume these unless overridden.

export const ICON_CARDS_PROPS = {
  heading: "Built for speed and consistency",
  subheading: "Every site shares the same design tokens and predictable API layout.",
  items: [
    { step: "01", title: "Instant preview", description: "Changes reflect in under 100ms. No deploy step, no waiting.", icon: "Zap" },
    { step: "02", title: "37 curated variants", description: "Every section type startups need — hero through footer.", icon: "Layers" },
    { step: "03", title: "JSON source of truth", description: "Declarative configs you own. Import, export, version control.", icon: "Code2" },
  ],
};

export const STEPS_HORIZONTAL_PROPS = {
  heading: "Gallery → JSON → Builder",
  subheading: "A connected workflow so you never write component JSON from scratch.",
  items: [
    { step: "01", title: "Explore the Gallery", description: "Browse component layout variants across section types." },
    { step: "02", title: "Copy component JSON", description: "Every tweak syncs to a live JSON data layout panel." },
    { step: "03", title: "Assemble in Builder", description: "Drop configurations into your application layout structure." },
  ],
};

export const STEPS_VERTICAL_PROPS = {
  heading: "Gallery → JSON → Builder",
  subheading: "A connected workflow so you never write component JSON from scratch.",
  items: [
    { step: "01", title: "Explore the Gallery", description: "Browse component layout variants across section types." },
    { step: "02", title: "Copy component JSON", description: "Every tweak syncs to a live JSON data layout panel." },
    { step: "03", title: "Assemble in Builder", description: "Drop configurations into your application layout structure." },
  ],
};