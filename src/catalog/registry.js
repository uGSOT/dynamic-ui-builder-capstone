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


import SimpleRow, {
  defaultProps as simpleRowProps,
  defaultStyles as simpleRowStyles,
  propSchema as simpleRowPropSchema,
} from "./logo-cloud/SimpleRow/SimpleRow.jsx";

import WithHeading, {
  defaultProps as withHeadingProps,
  defaultStyles as withHeadingStyles,
  propSchema as withHeadingPropSchema,
} from "./logo-cloud/WithHeading/WithHeading.jsx";

import LogoGrid, {
  defaultProps as logoGridProps,
  defaultStyles as logoGridStyles,
  propSchema as logoGridPropSchema,
} from "./logo-cloud/LogoGrid/LogoGrid.jsx";

import CardGrid, {
  defaultProps as cardGridProps,
  defaultStyles as cardGridStyles,
  propSchema as cardGridPropSchema,
} from "./testimonials/CardGrid/CardGrid.jsx";

import FeaturedSingle, {
  defaultProps as featuredSingleProps,
  defaultStyles as featuredSingleStyles,
  propSchema as featuredSinglePropSchema,
} from "./testimonials/FeaturedSingle/FeaturedSingle.jsx";

import Carousel, {
  defaultProps as carouselProps,
  defaultStyles as carouselStyles,
  propSchema as carouselPropSchema,
} from "./testimonials/Carousel/Carousel.jsx";

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

export const LOGO_CLOUD_VARIANTS = {
  "simple-row": {
    id: "simple-row",
    name: "Simple Row",
    description: "Grayscale logos in a horizontal row, no heading",
    component: SimpleRow,
    defaultProps: simpleRowProps,
    defaultStyles: simpleRowStyles,
    propSchema: simpleRowPropSchema,
  },
  "with-heading": {
    id: "with-heading",
    name: "With Heading",
    description: "Short heading above logo row",
    component: WithHeading,
    defaultProps: withHeadingProps,
    defaultStyles: withHeadingStyles,
    propSchema: withHeadingPropSchema,
  },
  "logo-grid": {
    id: "logo-grid",
    name: "Logo Grid",
    description: "Logos in a 3×2 or 4×2 grid with equal spacing",
    component: LogoGrid,
    defaultProps: logoGridProps,
    defaultStyles: logoGridStyles,
    propSchema: logoGridPropSchema,
  },
};

export const TESTIMONIAL_VARIANTS = {
  "card-grid": {
    id: "card-grid",
    name: "Card Grid",
    description: "3 testimonial cards with quote, name, role, avatar",
    component: CardGrid,
    defaultProps: cardGridProps,
    defaultStyles: cardGridStyles,
    propSchema: cardGridPropSchema,
  },
  "featured-single": {
    id: "featured-single",
    name: "Featured Single",
    description: "One large quote with photo, name, company logo",
    component: FeaturedSingle,
    defaultProps: featuredSingleProps,
    defaultStyles: featuredSingleStyles,
    propSchema: featuredSinglePropSchema,
  },
  carousel: {
    id: "carousel",
    name: "Carousel",
    description: "Horizontally scrollable testimonial cards with dot navigation",
    component: Carousel,
    defaultProps: carouselProps,
    defaultStyles: carouselStyles,
    propSchema: carouselPropSchema,
  },
};

export const COMPONENT_REGISTRY = {
  faq: {
    type: "faq",
    label: "FAQ",
    description: "Frequently asked questions — reduces support load",
    variants: FAQ_VARIANTS,
  },

  "logo-cloud": {
    type: "logo-cloud",
    label: "Logo Cloud",
    description: "Trusted-by social proof with company logos",
    variants: LOGO_CLOUD_VARIANTS,
  },
  testimonials: {
    type: "testimonials",
    label: "Testimonials",
    description: "Customer quotes and social proof from real users",
    variants: TESTIMONIAL_VARIANTS,
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
