// ==========================================
// 1. FAQ Variant Imports
// ==========================================
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

// ==========================================
// 2. Navbar Variant Imports
// ==========================================
import ClassicSticky, {
  defaultProps as classicStickyProps,
  defaultStyles as classicStickyStyles,
  propSchema as classicStickyPropSchema,
} from "./navbar/ClassicSticky/ClassicSticky.jsx";
import CenteredLogo, {
  defaultProps as centeredLogoProps,
  defaultStyles as centeredLogoStyles,
  propSchema as centeredLogoPropSchema,
} from "./navbar/CenteredLogo/CenteredLogo.jsx";
import TransparentHero, {
  defaultProps as transparentHeroProps,
  defaultStyles as transparentHeroStyles,
  propSchema as transparentHeroPropSchema,
} from "./navbar/TransparentHero/TransparentHero.jsx";

// ==========================================
// 3. Logo Cloud Variant Imports
// ==========================================
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

// ==========================================
// 4. Hero Variant Imports
// ==========================================
import CenteredHero, {
  defaultProps as centeredHeroProps,
  defaultStyles as centeredHeroStyles,
  propSchema as centeredHeroPropSchema,
} from "./hero/Centered/Centered.jsx";
import SplitImageLeft, {
  defaultProps as splitImageLeftProps,
  defaultStyles as splitImageLeftStyles,
  propSchema as splitImageLeftPropSchema,
} from "./hero/SplitImageLeft/SplitImageLeft.jsx";
import SplitImageRight, {
  defaultProps as splitImageRightProps,
  defaultStyles as splitImageRightStyles,
  propSchema as splitImageRightPropSchema,
} from "./hero/SplitImageRight/SplitImageRight.jsx";
import WithSocialProof, {
  defaultProps as withSocialProofProps,
  defaultStyles as withSocialProofStyles,
  propSchema as withSocialProofPropSchema,
} from "./hero/WithSocialProof/WithSocialProof.jsx";

// ==========================================
// 5. How It Works Variant Imports
// ==========================================
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

// ==========================================
// 6. Features Variant Imports
// ==========================================
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

// ==========================================
// 7. Pricing Variant Imports
// ==========================================
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

// ==========================================
// 8. Variant Maps Definition
// ==========================================
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
    name: "Classic Sticky Navbar",
    description: "Sticky navbar with a centered brand and right-side CTA",
    component: ClassicSticky,
    defaultProps: classicStickyProps,
    defaultStyles: classicStickyStyles,
    propSchema: classicStickyPropSchema,
  },
  "centered-logo": {
    id: "centered-logo",
    name: "Centered Logo Navbar",
    description: "Centered logo with navigation links split on either side",
    component: CenteredLogo,
    defaultProps: centeredLogoProps,
    defaultStyles: centeredLogoStyles,
    propSchema: centeredLogoPropSchema,
  },
  "transparent-hero": {
    id: "transparent-hero",
    name: "Transparent Hero Navbar",
    description: "Hero-style transparent navbar with blur background on scroll",
    component: TransparentHero,
    defaultProps: transparentHeroProps,
    defaultStyles: transparentHeroStyles,
    propSchema: transparentHeroPropSchema,
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

export const HERO_VARIANTS = {
  centered: {
    id: "centered",
    name: "Centered Hero",
    description: "Centered hero section with headline, actions, and badge",
    component: CenteredHero,
    defaultProps: centeredHeroProps,
    defaultStyles: centeredHeroStyles,
    propSchema: centeredHeroPropSchema,
  },
  "split-image-left": {
    id: "split-image-left",
    name: "Split Image Left Hero",
    description: "Hero section with primary content on the right and image on the left",
    component: SplitImageLeft,
    defaultProps: splitImageLeftProps,
    defaultStyles: splitImageLeftStyles,
    propSchema: splitImageLeftPropSchema,
  },
  "split-image-right": {
    id: "split-image-right",
    name: "Split Image Right Hero",
    description: "Hero section with primary content on the left and image on the right",
    component: SplitImageRight,
    defaultProps: splitImageRightProps,
    defaultStyles: splitImageRightStyles,
    propSchema: splitImageRightPropSchema,
  },
  "with-social-proof": {
    id: "with-social-proof",
    name: "Hero with Social Proof",
    description: "Hero section with supporting social proof text and avatars",
    component: WithSocialProof,
    defaultProps: withSocialProofProps,
    defaultStyles: withSocialProofStyles,
    propSchema: withSocialProofPropSchema,
  },
};

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

// ==========================================
// 9. Centralized Component Registry Map
// ==========================================
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
    description: "Top navigation section with branding, links, and CTA",
    variants: NAVBAR_VARIANTS,
  },
  "logo-cloud": {
    type: "logo-cloud",
    label: "Logo Cloud",
    description: "Trusted-by social proof with company logos",
    variants: LOGO_CLOUD_VARIANTS,
  },
  hero: {
    type: "hero",
    label: "Hero",
    description: "Hero section for landing pages and promotional content",
    variants: HERO_VARIANTS,
  },
  "how-it-works": {
    type: "how-it-works",
    label: "How It Works",
    description: "Step-by-step product workflows and structural instructions",
    variants: HOW_IT_WORKS_VARIANTS,
  },
  features: {
    type: "features",
    label: "Features",
    description: "Product benefits and capabilities—the core what we do section.",
    variants: FEATURES_VARIANTS,
  },
  pricing: {
    type: "pricing",
    label: "Pricing",
    description: "Pricing tables and plans subscription options",
    variants: PRICING_VARIANTS,
  },
};

// ==========================================
// 10. Schema Helper Builders
// ==========================================
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
    props: structuredClone(variant.defaultProps || {}),
    styles: structuredClone(variant.defaultStyles || {}),
    responsive: {},
  };
}

export function getVariantEntry(type, variantId) {
  return COMPONENT_REGISTRY[type]?.variants[variantId] ?? null;
}