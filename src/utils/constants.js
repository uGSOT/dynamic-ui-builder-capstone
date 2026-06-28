export const STORAGE_KEYS = {
  DRAFT: "uibuilder:draft",
  PREFERENCES: "uibuilder:preferences",
};

export const SESSION_KEYS = {
  PREVIEW: "uibuilder:preview-session",
};

export const BREAKPOINTS = {
  tablet: 768,
  desktop: 1024,
};

export const UPGRAD_THEME = {
  colors: {
    primary: "#e50913",
    secondary: "#0a0a12",
    accent: "#ff2d37",
    background: "#ffffff",
    surface: "#f5f5f7",
    text: "#0f0f14",
    muted: "#5c5c6f",
  },
  typography: {
    fontFamily: "plus-jakarta-sans",
    scale: 1,
  },
};

/** @deprecated use UPGRAD_THEME */
export const DEFAULT_THEME = UPGRAD_THEME;

export const UPGRAD_BRAND = {
  name: "upGrad SoT",
  product: "Dynamic UI Builder Studio",
  tagline: "Design startup websites with JSON — powered by upGrad School of Technology",
  logo: { type: "text", text: "upGrad SoT", icon: "Layers" },
  navLinks: [
    { label: "Home", href: "#", icon: "Layers" },
    { label: "Programs", href: "#programs", icon: "BookOpen" },
    { label: "Gallery", href: "/gallery", icon: "LayoutGrid" },
    { label: "Builder", href: "/builder", icon: "Wrench" },
  ],
  cta: { label: "Apply Now", href: "https://sot.upgrad.com/" },
  copyright: "© 2026 upGrad School of Technology. All rights reserved.",
};

export const MOBILE_SECTION_OVERRIDES = {
  mobile: {
    styles: { paddingY: 4 },
  },
  tablet: {
    styles: { paddingY: 6 },
  },
};
