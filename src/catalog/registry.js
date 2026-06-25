import AccordionSingle, {
  defaultProps as accordionSingleProps,
  defaultStyles as accordionSingleStyles,
  propSchema as accordionSinglePropSchema,
} from "./faq/AccordionSingle/AccordionSingle.jsx";
import AccordionTwoColumn, {
  defaultProps as accordionTwoColumnProps,
  defaultStyles as accordionTwoColumnStyles,
  propSchema as accordionTwoColumnPropSchema,
} from "./faq/AccordionTwoColumn/AccordionTwoColumn.jsx";
import GroupedByCategory, {
  defaultProps as groupedByCategoryProps,
  defaultStyles as groupedByCategoryStyles,
  propSchema as groupedByCategoryPropSchema,
} from "./faq/GroupedByCategory/GroupedByCategory.jsx";

import Centered, {
  defaultProps as centeredProps,
  defaultStyles as centeredStyles,
  propSchema as centeredPropSchema,
} from "./hero/Centered/Centered.jsx";
import SplitImageRight, {
  defaultProps as splitImageRightProps,
  defaultStyles as splitImageRightStyles,
  propSchema as splitImageRightPropSchema,
} from "./hero/SplitImageRight/SplitImageRight.jsx";
import SplitImageLeft, {
  defaultProps as splitImageLeftProps,
  defaultStyles as splitImageLeftStyles,
  propSchema as splitImageLeftPropSchema,
} from "./hero/SplitImageLeft/SplitImageLeft.jsx";
import WithSocialProof, {
  defaultProps as withSocialProofProps,
  defaultStyles as withSocialProofStyles,
  propSchema as withSocialProofPropSchema,
} from "./hero/WithSocialProof/WithSocialProof.jsx";

export const FAQ_VARIANTS = {
  "accordion-single": {
    id: "accordion-single",
    name: "Accordion Single Column",
    description: "Expand/collapse Q&A list in one column",
    component: AccordionSingle,
    defaultProps: accordionSingleProps,
    defaultStyles: accordionSingleStyles,
    propSchema: accordionSinglePropSchema,
  },
  "accordion-two-column": {
    id: "accordion-two-column",
    name: "Accordion Two Column",
    description: "Questions split across two accordion columns",
    component: AccordionTwoColumn,
    defaultProps: accordionTwoColumnProps,
    defaultStyles: accordionTwoColumnStyles,
    propSchema: accordionTwoColumnPropSchema,
  },
  "grouped-category": {
    id: "grouped-category",
    name: "Grouped By Category",
    description: "FAQs under category headings (Product, Pricing, Security)",
    component: GroupedByCategory,
    defaultProps: groupedByCategoryProps,
    defaultStyles: groupedByCategoryStyles,
    propSchema: groupedByCategoryPropSchema,
  },
};

export const HERO_VARIANTS = {
  centered: {
    id: "centered",
    name: "Centered Hero",
    description: "A hero section with centered content, actions, and optional image support",
    component: Centered,
    defaultProps: centeredProps,
    defaultStyles: centeredStyles,
    propSchema: centeredPropSchema,
  },
  "split-image-right": {
    id: "split-image-right",
    name: "Split Image Right",
    description: "Copy left, product screenshot/mockup right",
    component: SplitImageRight,
    defaultProps: splitImageRightProps,
    defaultStyles: splitImageRightStyles,
    propSchema: splitImageRightPropSchema,
  },
  "split-image-left": {
    id: "split-image-left",
    name: "Split Image Left",
    description: "Image left, copy right",
    component: SplitImageLeft,
    defaultProps: splitImageLeftProps,
    defaultStyles: splitImageLeftStyles,
    propSchema: splitImageLeftPropSchema,
  },
  "with-social-proof": {
    id: "with-social-proof",
    name: "With Social Proof",
    description: "Centered hero with customer avatar stack and proof copy below CTAs",
    component: WithSocialProof,
    defaultProps: withSocialProofProps,
    defaultStyles: withSocialProofStyles,
    propSchema: withSocialProofPropSchema,
  },
};

export const COMPONENT_REGISTRY = {
  faq: {
    type: "faq",
    label: "FAQ",
    description: "Frequently asked questions — reduces support load",
    variants: FAQ_VARIANTS,
  },
  hero: {
    type: "hero",
    label: "Hero",
    description: "Above-the-fold headline section",
    variants: HERO_VARIANTS,
  },
};

export function buildSectionConfig(type, variantId, sectionId) {
  const component = COMPONENT_REGISTRY[type];
  if (!component) {
    throw new Error(`Unknown component type: ${type}`);
  }

  const variant = component.variants[variantId];
  if (!variant) {
    throw new Error(`Unknown variant: ${variantId} for type ${type}`);
  }

  return {
    id: sectionId ?? `${type}-${variantId}`,
    type,
    variant: variantId,
    props: structuredClone(variant.defaultProps),
    styles: structuredClone(variant.defaultStyles),
    responsive: {},
  };
}

export function getVariantEntry(type, variantId) {
  return COMPONENT_REGISTRY[type]?.variants[variantId] ?? null;
}
