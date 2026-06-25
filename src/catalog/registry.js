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

import InlineRow, {
  defaultProps as inlineRowProps,
  defaultStyles as inlineRowStyles,
  propSchema as inlineRowPropSchema,
} from "./stats/InlineRow/InlineRow.jsx";

import StatCards, {
  defaultProps as statCardsProps,
  defaultStyles as statCardsStyles,
  propSchema as statCardsPropSchema,
} from "./stats/StatCards/StatCards.jsx";

import SplitWithCopy, {
  defaultProps as splitWithCopyProps,
  defaultStyles as splitWithCopyStyles,
  propSchema as splitWithCopyPropSchema,
} from "./stats/SplitWithCopy/SplitWithCopy.jsx";

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
import LogoGrid, {
  defaultProps as logoGridProps,
  defaultStyles as logoGridStyles,
  propSchema as logoGridPropSchema,
} from "./logo-cloud/LogoGrid/LogoGrid.jsx";

import ThreeTier, {
  defaultProps as threeTierProps,
  defaultStyles as threeTierStyles,
  propSchema as threeTierPropSchema,
} from "./pricing/ThreeTier/ThreeTier.jsx";
import TwoTierHighlight, {
  defaultProps as twoTierHighlightProps,
  defaultStyles as twoTierHighlightStyles,
  propSchema as twoTierHighlightPropSchema,
} from "./pricing/TwoTierHighlight/TwoTierHighlight.jsx";
import SinglePlanFocus, {
  defaultProps as singlePlanFocusProps,
  defaultStyles as singlePlanFocusStyles,
  propSchema as singlePlanFocusPropSchema,
} from "./pricing/SinglePlanFocus/SinglePlanFocus.jsx";

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
    description: "Traditional navbar that sticks to top with solid background",
    component: ClassicSticky,
    defaultProps: classicStickyProps,
    defaultStyles: classicStickyStyles,
    propSchema: classicStickyPropSchema,
  },
  "transparent-hero": {
    id: "transparent-hero",
    name: "Transparent Hero",
    description: "Transparent navbar over hero, becomes opaque on scroll",
    component: TransparentHero,
    defaultProps: transparentHeroProps,
    defaultStyles: transparentHeroStyles,
    propSchema: transparentHeroPropSchema,
  },
  "centered-logo": {
    id: "centered-logo",
    name: "Centered Logo",
    description: "Logo centered at top with nav links below on mobile",
    component: CenteredLogo,
    defaultProps: centeredLogoProps,
    defaultStyles: centeredLogoStyles,
    propSchema: centeredLogoPropSchema,
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

export const STATS_VARIANTS = {
  "inline-row": {
    id: "inline-row",
    name: "Inline Row",
    description: "Stats displayed in a horizontal row layout",
    component: InlineRow,
    defaultProps: inlineRowProps,
    defaultStyles: inlineRowStyles,
    propSchema: inlineRowPropSchema,
  },
  "stat-cards": {
    id: "stat-cards",
    name: "Stat Cards",
    description: "Stats in a grid of individual cards",
    component: StatCards,
    defaultProps: statCardsProps,
    defaultStyles: statCardsStyles,
    propSchema: statCardsPropSchema,
  },
  "split-with-copy": {
    id: "split-with-copy",
    name: "Split With Copy",
    description: "Stats alongside descriptive copy in a split layout",
    component: SplitWithCopy,
    defaultProps: splitWithCopyProps,
    defaultStyles: splitWithCopyStyles,
    propSchema: splitWithCopyPropSchema,
  },
};



export const PRICING_VARIANTS = {
  "three-tier": {
    id: "three-tier",
    name: "Three Tier Cards",
    description: "Free / Pro / Enterprise cards side by side",
    component: ThreeTier,
    defaultProps: threeTierProps,
    defaultStyles: threeTierStyles,
    propSchema: threeTierPropSchema,
  },
  "two-tier-highlight": {
    id: "two-tier-highlight",
    name: "Two Tier Highlight",
    description: "Two plans with one visually emphasized (most popular)",
    component: TwoTierHighlight,
    defaultProps: twoTierHighlightProps,
    defaultStyles: twoTierHighlightStyles,
    propSchema: twoTierHighlightPropSchema,
  },
  "single-plan-focus": {
    id: "single-plan-focus",
    name: "Single Plan Focus",
    description: "One plan centered with feature checklist",
    component: SinglePlanFocus,
    defaultProps: singlePlanFocusProps,
    defaultStyles: singlePlanFocusStyles,
    propSchema: singlePlanFocusPropSchema,
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
    description: "Top navigation and call-to-action",
    variants: NAVBAR_VARIANTS,
  },
  "logo-cloud": {
    type: "logo-cloud",
    label: "Logo Cloud",
    description: "Trusted-by social proof with company logos",
    variants: LOGO_CLOUD_VARIANTS,
  },
  stats: {
    type: "stats",
    label: "Stats",
    description: "Key metrics and statistics to build credibility",
    variants: STATS_VARIANTS,
  },
  pricing: {
    type: "pricing",
    label: "Pricing",
    description: "Pricing tables and plans subscription options",
    variants: PRICING_VARIANTS,
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
