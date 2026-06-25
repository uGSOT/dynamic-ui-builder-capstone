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
// 3. Hero Variant Imports
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
// 4. How It Works Variant Imports (New Code Added)
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
// 5. Variant Maps Definition
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

// ==========================================
// 6. Centralized Component Registry Map
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
};

// ==========================================
// 7. Schema Helper Builders
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