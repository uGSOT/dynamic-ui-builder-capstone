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


// New Imports for How It Works Components

import StepsHorizontal, {
  defaultProps as horizontalProps,
  defaultStyles as horizontalStyles,
  propSchema as horizontalPropSchema,
} from "./how-it-works/StepsHorizontal/StepsHorizontal.jsx";
import StepsVertical, {
  defaultProps as verticalProps,
  defaultStyles as verticalStyles,
  propSchema as verticalPropSchema,
} from "./how-it-works/StepsVertical/StepsVertical.jsx";
import IconCards, {
  defaultProps as iconCardsProps,
  defaultStyles as iconCardsStyles,
  propSchema as iconCardsPropSchema,
} from "./how-it-works/IconCards/IconCards.jsx";

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

// New Registry Entries for How It Works Components

export const HOW_IT_WORKS_VARIANTS = {
  "steps-horizontal": {
    id: "steps-horizontal",
    name: "Horizontal Steps",
    description: "Progressive numeric circles lined up left-to-right",
    component: StepsHorizontal,
    defaultProps: horizontalProps,
    defaultStyles: horizontalStyles,
    propSchema: horizontalPropSchema,
  },
  "steps-vertical": {
    id: "steps-vertical",
    name: "Vertical Timeline",
    description: "Clean stacked vertical process listing with a connecting trail line",
    component: StepsVertical,
    defaultProps: verticalProps,
    defaultStyles: verticalStyles,
    propSchema: verticalPropSchema,
  },
  "icon-cards": {
    id: "icon-cards",
    name: "Icon Accent Cards",
    description: "Grid boxes highlighted with modular icons and modern borders",
    component: IconCards,
    defaultProps: iconCardsProps,
    defaultStyles: iconCardsStyles,
    propSchema: iconCardsPropSchema,
  },
};

// update in component registry to include how-it-works section

export const COMPONENT_REGISTRY = {
  faq: {
    type: "faq",
    label: "FAQ",
    description: "Frequently asked questions — reduces support load",
    variants: FAQ_VARIANTS,
  },
  "how-it-works": {
    type: "how-it-works",
    label: "How It Works",
    description: "Step-by-step product workflows and structural instructions",
    variants: HOW_IT_WORKS_VARIANTS,
  },
};


// export const COMPONENT_REGISTRY = {
//   faq: {
//     type: "faq",
//     label: "FAQ",
//     description: "Frequently asked questions — reduces support load",
//     variants: FAQ_VARIANTS,
//   },
// };

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
