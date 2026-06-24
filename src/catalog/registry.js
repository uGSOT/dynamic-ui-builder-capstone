import React from 'react'
import Centered from './hero/Centered'

const EmptyPreview = () =>
  React.createElement('div', {
    className: 'h-48 w-full rounded border border-dashed border-gray-300 bg-gray-50',
  })

const CenteredLogoFallback = EmptyPreview

const registry = {
  navbar: {
    title: 'Navbar',
    variants: [
      {
        id: 'classic-sticky',
        label: 'Classic Sticky',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'transparent-hero',
        label: 'Transparent Hero',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'centered-logo',
        label: 'Centered Logo',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
    ],
  },
  hero: {
    title: 'Hero',
    variants: [
      {
        id: 'centered',
        label: 'Centered',
        component: Centered,
        defaultProps: {},
      },
      {
        id: 'split-image-right',
        label: 'Split Image Right',
        component: EmptyPreview,
        defaultProps: {},
      },
      {
        id: 'split-image-left',
        label: 'Split Image Left',
        component: EmptyPreview,
        defaultProps: {},
      },
      {
        id: 'with-social-proof',
        label: 'With Social Proof',
        component: EmptyPreview,
        defaultProps: {},
      },
    ],
  },
  'logo-cloud': {
    title: 'Logo Cloud',
    variants: [
      {
        id: 'simple-row',
        label: 'Simple Row',
        component: EmptyPreview,
        defaultProps: {},
      },
      {
        id: 'with-heading',
        label: 'With Heading',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'logo-grid',
        label: 'Logo Grid',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
    ],
  },
  features: {
    title: 'Features',
    variants: [
      {
        id: 'icon-grid',
        label: 'Icon Grid',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'alternating-rows',
        label: 'Alternating Rows',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'bento-grid',
        label: 'Bento Grid',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
    ],
  },
  'how-it-works': {
    title: 'How It Works',
    variants: [
      {
        id: 'steps-horizontal',
        label: 'Steps Horizontal',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'steps-vertical',
        label: 'Steps Vertical',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'icon-cards',
        label: 'Icon Cards',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
    ],
  },
  stats: {
    title: 'Stats',
    variants: [
      {
        id: 'inline-row',
        label: 'Inline Row',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'stat-cards',
        label: 'Stat Cards',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'split-with-copy',
        label: 'Split With Copy',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
    ],
  },
  pricing: {
    title: 'Pricing',
    variants: [
      {
        id: 'three-tier',
        label: 'Three Tier',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'two-tier-highlight',
        label: 'Two Tier Highlight',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'single-plan-focus',
        label: 'Single Plan Focus',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
    ],
  },
  testimonials: {
    title: 'Testimonials',
    variants: [
      {
        id: 'card-grid',
        label: 'Card Grid',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'featured-single',
        label: 'Featured Single',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'carousel',
        label: 'Carousel',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
    ],
  },
  faq: {
    title: 'FAQ',
    variants: [
      {
        id: 'accordion-single',
        label: 'Accordion Single',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'accordion-two-column',
        label: 'Accordion Two Column',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'grouped-category',
        label: 'Grouped Category',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
    ],
  },
  cta: {
    title: 'CTA Banner',
    variants: [
      {
        id: 'full-width-centered',
        label: 'Full Width Centered',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'split-with-image',
        label: 'Split With Image',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'newsletter-signup',
        label: 'Newsletter Signup',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
    ],
  },
  team: {
    title: 'Team',
    variants: [
      {
        id: 'grid-simple',
        label: 'Grid Simple',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'grid-with-bio',
        label: 'Grid With Bio',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'compact-row',
        label: 'Compact Row',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
    ],
  },
  footer: {
    title: 'Footer',
    variants: [
      {
        id: 'multi-column',
        label: 'Multi Column',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'minimal-centered',
        label: 'Minimal Centered',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
      {
        id: 'with-newsletter',
        label: 'With Newsletter',
        component: CenteredLogoFallback,
        defaultProps: {},
      },
    ],
  },
}

export function getTypes() {
  return Object.entries(registry).map(([type, config]) => ({
    type,
    title: config.title,
  }))
}

export function getVariants(type) {
  return registry[type]?.variants ?? []
}

export function getVariant(type, variantId) {
  return getVariants(type).find((variant) => variant.id === variantId) ?? null
}

export default registry
