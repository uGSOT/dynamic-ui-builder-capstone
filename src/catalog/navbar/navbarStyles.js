const LOGO_SIZES = {
  sm: {
    bar: "h-12",
    logoBox: "h-6 w-6",
    logoIcon: 13,
    logoText: "text-xs",
    logoImage: "h-7",
  },
  md: {
    bar: "h-14",
    logoBox: "h-7 w-7",
    logoIcon: 15,
    logoText: "text-sm",
    logoImage: "h-8",
  },
  lg: {
    bar: "h-16",
    logoBox: "h-8 w-8",
    logoIcon: 17,
    logoText: "text-base",
    logoImage: "h-9",
  },
};

const BACKGROUND = {
  surface: "bg-surface",
  muted: "bg-surface-muted",
  navy: "bg-navy",
  transparent: "bg-transparent",
  blur: "bg-surface/90 backdrop-blur-md",
};

const BORDER = {
  white: "border-b border-white",
  subtle: "border-b border-border",
  none: "border-b border-transparent",
};

const PADDINGS = {
  compact: { padding: "px-4", gap: "gap-2" },
  default: { padding: "px-6", gap: "gap-4" },
  spacious: { padding: "px-8", gap: "gap-6" },
};

const LINK_SIZES = {
  sm: { text: "text-xs", icon: 12, pad: "px-2 py-1" },
  md: { text: "text-sm", icon: 14, pad: "px-3 py-1.5" },
  lg: { text: "text-base", icon: 16, pad: "px-4 py-2" },
};

export const NAVBAR_STYLE_DEFAULTS = {
  background: "surface",
  padding: "default",
  border: "white",
  linkSize: "md",
  logoSize: "md",
  ctaStyle: "brand",
};

export const NAVBAR_STYLE_PROP_SCHEMA = [
  {
    name: "background",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.background,
    allowedValues: "surface | muted | navy | transparent | blur",
    description: "Navbar background color",
  },
  {
    name: "padding",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.padding,
    allowedValues: "compact | default | spacious",
    description: "Horizontal padding and gap spacing",
  },
  {
    name: "border",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.border,
    allowedValues: "white | subtle | none",
    description: "Bottom border separating navbar from content",
  },
  {
    name: "linkSize",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.linkSize,
    allowedValues: "sm | md | lg",
    description: "Navigation link text and icon size",
  },
  {
    name: "logoSize",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.logoSize,
    allowedValues: "sm | md | lg",
    description: "Logo size and bar height",
  },
  {
    name: "ctaStyle",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.ctaStyle,
    allowedValues: "brand | outline | ghost",
    description: "CTA button appearance",
  },
];

export function resolveNavbarStyles(styles = {}) {
  const merged = { ...NAVBAR_STYLE_DEFAULTS, ...styles };
  const logoSize = LOGO_SIZES[merged.logoSize] ?? LOGO_SIZES.md;
  const padding = PADDINGS[merged.padding] ?? PADDINGS.default;
  const linkSize = LINK_SIZES[merged.linkSize] ?? LINK_SIZES.md;
  const background = BACKGROUND[merged.background] ?? BACKGROUND.surface;
  const border = BORDER[merged.border] ?? BORDER.white;

  // Auto-derive inverted text for dark backgrounds
  const inverted = ["navy", "blur"].includes(merged.background);

  return {
    headerClass: `${border} ${background}`.trim(),
    innerClass: `mx-auto w-full max-w-7xl ${logoSize.bar} ${padding.padding} ${padding.gap}`,
    logoSize,
    linkSize,
    inverted,
    ctaStyle: merged.ctaStyle ?? "brand",
    mobileMenuClass: merged.background === "navy"
      ? "border-border-dark bg-navy-elevated"
      : "border-border bg-surface",
  };
}
