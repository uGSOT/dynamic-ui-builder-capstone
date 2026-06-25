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

import ClassicSticky, {
  defaultProps as classicStickyProps,
  defaultStyles as classicStickyStyles,
  propSchema as classicStickyPropSchema,
} from "./navbar/ClassicSticky/ClassicSticky.jsx";

import TransparentHero, {
  defaultProps as transparentHeroProps,
  defaultStyles as transparentHeroStyles,
  propSchema as transparentHeroPropSchema,
} from "./navbar/TransparentHero/TransparentHero.jsx";

import CenteredLogo, {
  defaultProps as centeredLogoProps,
  defaultStyles as centeredLogoStyles,
  propSchema as centeredLogoPropSchema,
} from "./navbar/CenteredLogo/CenteredLogo.jsx";
import IconGrid, {
  defaultProps as iconGridProps,
  defaultStyles as iconGridStyles,
  propSchema as iconGridPropSchema,
} from "./features/IconGrid/IconGrid.jsx";

import AlternatingRows, {
  defaultProps as alternatingRowsProps,
  defaultStyles as alternatingRowsStyles,
  propSchema as alternatingRowsPropSchema,
} from "./features/AlternatingRows/AlternatingRows.jsx";

import BentoGrid, {
  defaultProps as bentoGridProps,
  defaultStyles as bentoGridStyles,
  propSchema as bentoGridPropSchema,
} from "./features/BentoGrid/BentoGrid.jsx";

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

export const NAVBAR_VARIANTS = {
  "classic-sticky": {
    id: "classic-sticky",
    name: "Classic Sticky",
    description:
      "Logo left, links center/right, CTA button, solid background, sticks on scroll",
    component: ClassicSticky,
    defaultProps: classicStickyProps,
    defaultStyles: classicStickyStyles,
    propSchema: classicStickyPropSchema,
  },
  "transparent-hero": {
    id: "transparent-hero",
    name: "Transparent Hero",
    description:
      "Transparent background over hero, becomes solid on scroll",
    component: TransparentHero,
    defaultProps: transparentHeroProps,
    defaultStyles: transparentHeroStyles,
    propSchema: transparentHeroPropSchema,
  },
  "centered-logo": {
    id: "centered-logo",
    name: "Centered Logo",
    description:
      "Logo centered, links split left/right, CTA on far right",
    component: CenteredLogo,
    defaultProps: centeredLogoProps,
    defaultStyles: centeredLogoStyles,
    propSchema: centeredLogoPropSchema,
  },
};

export const FEATURES_VARIANTS = {
  "icon-grid": {
    id: "icon-grid",
    name: "Icon Grid",
    description: "3 or 6 features in equal columns with icon, title, description",
    component: IconGrid,
    defaultProps: iconGridProps,
    defaultStyles: iconGridStyles,
    propSchema: iconGridPropSchema,
  },
  "alternating-rows": {
    id: "alternating-rows",
    name: "Alternating Rows",
    description: "Feature rows alternating image left/right with copy",
    component: AlternatingRows,
    defaultProps: alternatingRowsProps,
    defaultStyles: alternatingRowsStyles,
    propSchema: alternatingRowsPropSchema,
  },
  "bento-grid": {
    id: "bento-grid",
    name: "Bento Grid",
    description: "Asymmetric card grid with varied cell sizes",
    component: BentoGrid,
    defaultProps: bentoGridProps,
    defaultStyles: bentoGridStyles,
    propSchema: bentoGridPropSchema,
  },
};

export const COMPONENT_REGISTRY = {
  faq: {
    type: "faq",
    label: "FAQ",
    description: "Frequently asked questions — reduces support load",
    variants: FAQ_VARIANTS,
  },
  navbar: {
    type: "navbar",
    label: "Navbar",
    description: "Top navigation on every  Website",
    variants: NAVBAR_VARIANTS,
  },
  features: {
    type: "features",
    label: "Features",
    description: "Product benefits and capabilities—the core what we do section.",
    variants: FEATURES_VARIANTS
  }
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
