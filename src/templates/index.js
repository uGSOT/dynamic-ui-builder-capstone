import { buildSectionConfig } from "../catalog/registry";
import {
  MOBILE_SECTION_OVERRIDES,
  UPGRAD_BRAND,
  UPGRAD_THEME,
} from "../utils/constants";

function withResponsive(section, overrides) {
  const responsive =
    overrides && Object.keys(overrides).length > 0
      ? overrides
      : MOBILE_SECTION_OVERRIDES;
  return { ...section, responsive: structuredClone(responsive) };
}

function navbarSection(variant, id, extra = {}) {
  const section = buildSectionConfig("navbar", variant, id);
  section.props = {
    ...section.props,
    logo: UPGRAD_BRAND.logo,
    navLinks: UPGRAD_BRAND.navLinks,
    ctaButton: UPGRAD_BRAND.cta,
    ...extra.props,
  };
  section.styles = { ...section.styles, ...extra.styles };
  return withResponsive(section, extra.responsive);
}

function section(type, variant, id, customizer) {
  const base = buildSectionConfig(type, variant, id);
  return withResponsive(customizer(base));
}

function buildSite(meta, sections) {
  return {
    meta,
    theme: structuredClone(UPGRAD_THEME),
    pages: [{ id: "home", path: "/", sections }],
  };
}

export const BLANK_TEMPLATE = buildSite(
  {
    title: `${UPGRAD_BRAND.product} — ${UPGRAD_BRAND.name}`,
    description: UPGRAD_BRAND.tagline,
  },
  []
);

export const SAAS_LANDING_TEMPLATE = buildSite(
  {
    title: `${UPGRAD_BRAND.product} — Ship startup sites faster`,
    description:
      "Build complete landing pages with JSON — a capstone project by upGrad School of Technology.",
  },
  [
    navbarSection("classic-sticky", "nav-1"),
    section("hero", "split-image-right", "hero-1", (s) => {
      s.props = {
        ...s.props,
        headline: "Design startup websites with JSON",
        subtext:
          "Browse 37 component variants, copy section JSON from the gallery, and assemble full landing pages in the builder — no backend required.",
        primaryAction: { label: "Open Builder", href: "/builder" },
        secondaryAction: { label: "Explore Gallery", href: "/gallery" },
        badge: "upGrad School of Technology Capstone",
        imageUrl:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
      };
      s.styles = { ...s.styles, paddingY: 8, background: "surface" };
      return s;
    }),
    section("logo-cloud", "with-heading", "logos-1", (s) => {
      s.props = {
        ...s.props,
        heading: "Trusted by teams building with upGrad SoT",
      };
      s.styles = { ...s.styles, background: "muted", paddingY: 6 };
      return s;
    }),
    section("features", "icon-grid", "features-1", (s) => {
      s.props = {
        ...s.props,
        heading: "Everything you need to ship a landing page",
        subheading:
          "A complete component system purpose-built for startup marketing sites.",
      };
      s.styles = { ...s.styles, background: "surface", paddingY: 8, accentColor: "brand" };
      return s;
    }),
    section("how-it-works", "steps-horizontal", "hiw-1", (s) => {
      s.props = {
        heading: "Gallery → JSON → Builder",
        subheading: UPGRAD_BRAND.tagline,
        items: [
          {
            step: "01",
            title: "Explore the Gallery",
            description:
              "Pick from 12 section types and 37 layout variants with live preview.",
          },
          {
            step: "02",
            title: "Copy component JSON",
            description:
              "Every tweak syncs to valid JSON you can paste straight into the builder.",
          },
          {
            step: "03",
            title: "Assemble your site",
            description:
              "Compose full pages, toggle responsive breakpoints, and export when ready.",
          },
        ],
      };
      s.styles = {
        background: "navy",
        paddingY: 16,
        headingColor: "text-ink-inverse",
        subheadingColor: "text-ink-inverse-muted",
        cardBg: "bg-navy-elevated",
        cardTextColor: "text-ink-inverse",
      };
      return s;
    }),
    section("pricing", "three-tier", "pricing-1", (s) => {
      s.props = {
        ...s.props,
        heading: "Simple plans for every builder",
        subheading: "Start free — scale when your product launches.",
      };
      s.styles = { ...s.styles, background: "surface", paddingY: 8 };
      return s;
    }),
    section("testimonials", "card-grid", "testimonials-1", (s) => {
      s.props = {
        ...s.props,
        heading: "Loved by capstone builders",
        subheading: "Students and founders ship faster with the studio workflow.",
      };
      s.styles = { ...s.styles, background: "muted", paddingY: 8 };
      return s;
    }),
    section("faq", "accordion-single", "faq-1", (s) => {
      s.props = {
        ...s.props,
        heading: "Frequently asked questions",
        subheading: "Quick answers about the Dynamic UI Builder Studio.",
        items: [
          {
            question: "Do I need a backend?",
            answer:
              "No. The studio is a frontend-only SPA. Drafts save to your browser via localStorage.",
          },
          {
            question: "How do gallery and builder connect?",
            answer:
              "Copy section JSON from the gallery and paste it into pages[0].sections[] in the builder.",
          },
          {
            question: "Can I export my site config?",
            answer:
              "Yes. Use Export in the builder toolbar to download a .json file anytime.",
          },
        ],
      };
      s.styles = { ...s.styles, background: "surface", paddingY: 8 };
      return s;
    }),
    section("footer", "multi-column", "footer-1", (s) => {
      s.props = {
        ...s.props,
        logo: UPGRAD_BRAND.logo,
        tagline: UPGRAD_BRAND.tagline,
        copyright: UPGRAD_BRAND.copyright,
      };
      s.styles = { ...s.styles, background: "navy", paddingY: 8 };
      return s;
    }),
  ]
);

export const DEV_TOOL_LAUNCH_TEMPLATE = buildSite(
  {
    title: "DevStack — upGrad SoT Developer Studio",
    description: "Developer tools for modern engineering teams — upGrad theme",
  },
  [
    navbarSection("transparent-hero", "nav-1", {
      styles: { background: "transparent", linkTone: "default" },
    }),
    section("hero", "with-social-proof", "hero-1", (s) => {
      s.props = {
        ...s.props,
        headline: "Build better products, faster",
        subtext:
          "A JSON-powered site builder for developers who want pixel-perfect startup pages without writing component code from scratch.",
        primaryAction: { label: "Launch Builder", href: "/builder" },
        secondaryAction: { label: "View Components", href: "/gallery" },
        badge: "Built at upGrad School of Technology",
        socialProofText: "Joined by 2,400+ builders this semester",
      };
      s.styles = { ...s.styles, paddingY: 10, background: "navy", navbarOffset: "relaxed" };
      return s;
    }),
    section("features", "bento-grid", "features-1", (s) => {
      s.props = {
        ...s.props,
        heading: "Powerful building blocks",
        subheading: "Composable sections with consistent upGrad design tokens.",
      };
      s.styles = { ...s.styles, background: "surface", paddingY: 8, accentColor: "brand" };
      return s;
    }),
    section("stats", "inline-row", "stats-1", (s) => {
      s.styles = { ...s.styles, background: "muted", paddingY: 6 };
      return s;
    }),
    section("testimonials", "featured-single", "testimonials-1", (s) => {
      s.props = {
        ...s.props,
        heading: "What builders are saying",
      };
      s.styles = { ...s.styles, background: "surface", paddingY: 8 };
      return s;
    }),
    section("pricing", "two-tier-highlight", "pricing-1", (s) => {
      s.props = {
        ...s.props,
        heading: "Choose your builder plan",
        subheading: "Transparent pricing in the upGrad red-and-navy palette.",
      };
      s.styles = { ...s.styles, background: "muted", paddingY: 8 };
      return s;
    }),
    section("footer", "multi-column", "footer-1", (s) => {
      s.props = {
        ...s.props,
        logo: UPGRAD_BRAND.logo,
        tagline: "Developer-first site building for upGrad SoT capstone teams.",
        copyright: UPGRAD_BRAND.copyright,
      };
      s.styles = { ...s.styles, background: "navy", paddingY: 8 };
      return s;
    }),
  ]
);

export const AI_WAITLIST_TEMPLATE = buildSite(
  {
    title: "Neural Studio — upGrad SoT Waitlist",
    description: "Join the next generation of AI-powered site building",
  },
  [
    navbarSection("centered-logo", "nav-1"),
    section("hero", "centered", "hero-1", (s) => {
      s.props = {
        ...s.props,
        headline: "The future of no-code startup sites",
        subtext:
          "Join the waitlist for AI-assisted page assembly — styled with upGrad's signature red, navy, and Plus Jakarta Sans typography.",
        primaryAction: { label: "Join Waitlist", href: "#" },
        secondaryAction: { label: "See Gallery", href: "/gallery" },
        badge: "upGrad SoT · Early Access",
      };
      s.styles = { ...s.styles, paddingY: 10, background: "surface" };
      return s;
    }),
    section("features", "alternating-rows", "features-1", (s) => {
      s.props = {
        ...s.props,
        heading: "Designed for pre-launch teams",
        subheading: "Capture interest with polished sections before you ship v1.",
      };
      s.styles = { ...s.styles, background: "muted", paddingY: 8, accentColor: "brand" };
      return s;
    }),
    section("stats", "stat-cards", "stats-1", (s) => {
      s.styles = { ...s.styles, background: "surface", paddingY: 8 };
      return s;
    }),
    section("testimonials", "carousel", "testimonials-1", (s) => {
      s.props = {
        ...s.props,
        heading: "Early feedback from beta builders",
      };
      s.styles = { ...s.styles, background: "muted", paddingY: 8 };
      return s;
    }),
    section("faq", "accordion-two-column", "faq-1", (s) => {
      s.props = {
        ...s.props,
        heading: "Waitlist FAQ",
        subheading: "Common questions about the upGrad SoT builder program.",
      };
      s.styles = { ...s.styles, background: "surface", paddingY: 8 };
      return s;
    }),
    section("footer", "minimal-centered", "footer-1", (s) => {
      s.props = {
        ...s.props,
        logo: UPGRAD_BRAND.logo,
        copyright: UPGRAD_BRAND.copyright,
      };
      s.styles = { ...s.styles, background: "navy", paddingY: 8 };
      return s;
    }),
  ]
);

export const TEMPLATES = [
  { id: "blank", label: "Blank", config: BLANK_TEMPLATE },
  { id: "saas-landing", label: "SaaS Landing", config: SAAS_LANDING_TEMPLATE },
  { id: "dev-tool-launch", label: "Dev Tool Launch", config: DEV_TOOL_LAUNCH_TEMPLATE },
  { id: "ai-waitlist", label: "AI Product Waitlist", config: AI_WAITLIST_TEMPLATE },
];

export function getTemplateById(id) {
  return TEMPLATES.find((template) => template.id === id) ?? null;
}
