import React from "react";

export const defaultProps = {
  heading: "Designed for modern software teams",
  subheading: "Deploy fast with a clean interface that translates component design states instantly into code properties.",
  primaryAction: { label: "Get started", href: "#" },
  imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
};

export const defaultStyles = {
  background: "surface",
  paddingY: 16,
  headingColor: "text-text",
  headingSize: "text-3xl",
  headingWeight: "font-bold",
  subheadingColor: "text-ink-muted",
  subheadingSize: "text-base",
  imagePosition: "right"
};

export const propSchema = {
  props: [
    { name: "heading", type: "string", default: defaultProps.heading, allowedValues: "Any string", description: "Main conversational headline text" },
    { name: "subheading", type: "string", default: defaultProps.subheading, allowedValues: "Any string", description: "Supporting presentation copy descriptive subtext" },
    { name: "primaryAction", type: "object", default: "{ label: 'Get started', href: '#' }", allowedValues: "Object with label and href components", description: "Primary link action trigger" },
    { name: "imageUrl", type: "string", default: defaultProps.imageUrl, allowedValues: "Valid image address path string", description: "Visual panel asset layout resource address" }
  ],
  styles: [
    { name: "background", type: "string", default: defaultStyles.background, allowedValues: "surface | muted | navy", description: "Outer component structural background token layout value" },
    { name: "paddingY", type: "number", default: defaultStyles.paddingY, allowedValues: "8 | 12 | 16 | 20", description: "Vertical component dimension buffer spacing factor" },
    { name: "headingSize", type: "string", default: defaultStyles.headingSize, allowedValues: "text-2xl | text-3xl | text-4xl", description: "Headline text token size scale index pointer" },
    { name: "imagePosition", type: "string", default: defaultStyles.imagePosition, allowedValues: "left | right", description: "Visual split segment alignment orientation modifier toggle switch" }
  ]
};

export default function SplitWithImage(componentData) {
  const activeProps = componentData?.props || componentData;
  const activeStyles = componentData?.styles || {};

  const { heading = "", subheading = "", primaryAction, imageUrl } = activeProps || {};
  const {
    background = "surface",
    paddingY = 16,
    headingColor = "text-text",
    headingSize = "text-3xl",
    headingWeight = "font-bold",
    subheadingColor = "text-ink-muted",
    subheadingSize = "text-base",
    imagePosition = "right"
  } = activeStyles || {};

  const bgSectionClass = background === "navy" ? "bg-secondary text-white" : background === "muted" ? "bg-muted" : "bg-surface";
  const textContainerOrder = imagePosition === "left" ? "lg:order-last" : "";

  return (
    <div className={`px-6 py-${paddingY} ${bgSectionClass} transition-all`}>
      <div className="mx-auto max-w-5xl grid gap-12 items-center lg:grid-cols-2">
        <div className={`text-left space-y-6 ${textContainerOrder}`}>
          {heading && <h2 className={`${headingSize} ${headingWeight} ${headingColor} tracking-tight`}>{heading}</h2>}
          {subheading && <p className={`${subheadingSize} ${subheadingColor} leading-relaxed`}>{subheading}</p>}
          {primaryAction?.label && (
            <div>
              <a href={primaryAction.href || "#"} className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-sm hover:bg-primary-dark transition-all">
                {primaryAction.label}
              </a>
            </div>
          )}
        </div>
        {imageUrl && (
          <div className="overflow-hidden rounded-2xl border border-border/10 shadow-card bg-muted aspect-[4/3]">
            <img src={imageUrl} alt="" className="h-full w-full object-cover" />
          </div>
        )}
      </div>
    </div>
  );
}