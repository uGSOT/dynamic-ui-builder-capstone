import {
  resolveColorBg,
  resolveColorText,
  resolveStyleTokens,
} from "../styleTokens";

const NAVBAR_LOGO_SIZES = {
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
  xl: {
    bar: "h-16",
    logoBox: "h-8 w-8",
    logoIcon: 17,
    logoText: "text-base",
    logoImage: "h-12",
  },
};

const NAVBAR_LINK_SIZES = {
  xs: { text: "text-xs", icon: 12, pad: "px-2 py-1" },
  sm: { text: "text-sm", icon: 14, pad: "px-3 py-1.5" },
  base: { text: "text-base", icon: 16, pad: "px-4 py-2" },
  lg: { text: "text-base", icon: 16, pad: "px-4 py-2" },
  xl: { text: "text-base", icon: 16, pad: "px-4 py-2" },
};

const NAVBAR_PADDING = {
  4: { padding: "px-4", gap: "gap-2" },
  6: { padding: "px-6", gap: "gap-4" },
  8: { padding: "px-8", gap: "gap-6" },
  10: { padding: "px-8", gap: "gap-6" },
  12: { padding: "px-8", gap: "gap-6" },
};

const NAVBAR_BACKGROUND = {
  primary: "bg-brand",
  surface: "bg-surface",
  muted: "bg-surface-muted",
  subtle: "bg-surface-subtle",
  white: "bg-white",
  navy: "bg-navy",
  transparent: "bg-transparent",
  blur: "bg-surface/90 backdrop-blur-md",
};

const NAVBAR_BORDER = {
  none: "border-b border-transparent",
  white: "border-b border-white",
  subtle: "border-b border-border",
  primary: "border-b border-brand",
  surface: "border-b border-border",
  muted: "border-b border-border",
};

const LEGACY_KEY_MAP = {
  padding: "paddingX",
  border: "navbarBorder",
  linkSize: "descSize",
  ctaStyle: "ctaStyle",
  scrolledBackground: "scrolledBackground",
  linkTone: "linkTone",
};

const LEGACY_PADDING = {
  compact: 4,
  default: 6,
  spacious: 8,
};

const LEGACY_BORDER = {
  white: "white",
  subtle: "subtle",
  none: "none",
};

const LEGACY_LINK_SIZE = {
  sm: "xs",
  md: "sm",
  lg: "base",
};

const LEGACY_BACKGROUND = {
  surface: "surface",
  muted: "muted",
  navy: "navy",
  transparent: "transparent",
  blur: "blur",
};

function normalizeLegacyStyles(styles = {}) {
  const normalized = {};

  for (const [key, value] of Object.entries(styles)) {
    const mappedKey = LEGACY_KEY_MAP[key] ?? key;

    switch (mappedKey) {
      case "paddingX":
        normalized.paddingX =
          typeof value === "string" ? (LEGACY_PADDING[value] ?? value) : value;
        break;
      case "navbarBorder":
        normalized.navbarBorder = LEGACY_BORDER[value] ?? value;
        break;
      case "descSize":
        normalized.descSize = LEGACY_LINK_SIZE[value] ?? value;
        break;
      case "background":
        normalized.background = LEGACY_BACKGROUND[value] ?? value;
        break;
      case "scrolledBackground":
        normalized.scrolledBackground = LEGACY_BACKGROUND[value] ?? value;
        break;
      default:
        normalized[mappedKey] = value;
    }
  }

  return normalized;
}

export const NAVBAR_STYLE_DEFAULTS = {
  background: "surface",
  paddingX: 6,
  navbarBorder: "white",
  descSize: "sm",
  descWeight: "medium",
  logoSize: "md",
  logoColor: "surface",
  logoOpacity: "100",
  iconColor: "white",
  iconBg: "primary",
  iconRadius: "md",
  accentColor: "primary",
  ctaStyle: "brand",
  scrolledBackground: "blur",
};

export const NAVBAR_STYLE_PROP_SCHEMA = [
  {
    name: "background",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.background,
    allowedValues:
      '"primary" | "surface" | "muted" | "subtle" | "white" | "navy" | "transparent" | "blur"',
    description: "Navbar background color",
  },
  {
    name: "paddingX",
    type: "number",
    default: NAVBAR_STYLE_DEFAULTS.paddingX,
    allowedValues: "4 | 6 | 8 | 10 | 12",
    description: "Horizontal navbar padding scale",
  },
  {
    name: "navbarBorder",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.navbarBorder,
    allowedValues: '"none" | "white" | "subtle" | "primary" | "surface" | "muted"',
    description: "Bottom border separating navbar from content",
  },
  {
    name: "descSize",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.descSize,
    allowedValues: '"xs" | "sm" | "base" | "lg" | "xl"',
    description: "Navigation link font size",
  },
  {
    name: "logoSize",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.logoSize,
    allowedValues: '"sm" | "md" | "lg" | "xl"',
    description: "Logo display size and bar height",
  },
  {
    name: "logoColor",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.logoColor,
    allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"',
    description: "Logo text tint color",
  },
  {
    name: "iconColor",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.iconColor,
    allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"',
    description: "Logo icon color inside the mark",
  },
  {
    name: "iconRadius",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.iconRadius,
    allowedValues: '"none" | "sm" | "md" | "lg" | "xl" | "full"',
    description: "Logo mark border radius",
  },
  {
    name: "accentColor",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.accentColor,
    allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"',
    description: "Logo mark background color",
  },
  {
    name: "ctaStyle",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.ctaStyle,
    allowedValues: '"brand" | "outline" | "ghost"',
    description: "CTA button appearance",
  },
];

export const NAVBAR_TRANSPARENT_STYLE_PROP_SCHEMA = [
  ...NAVBAR_STYLE_PROP_SCHEMA,
  {
    name: "scrolledBackground",
    type: "string",
    default: NAVBAR_STYLE_DEFAULTS.scrolledBackground,
    allowedValues:
      '"primary" | "surface" | "muted" | "subtle" | "white" | "navy" | "transparent" | "blur"',
    description: "Background applied after scroll",
  },
];

function resolveNavbarBackground(token) {
  return NAVBAR_BACKGROUND[token] ?? NAVBAR_BACKGROUND.surface;
}

function resolveNavbarBorder(token) {
  return NAVBAR_BORDER[token] ?? NAVBAR_BORDER.subtle;
}

function resolveLinkSize(descSize) {
  if (NAVBAR_LINK_SIZES[descSize]) {
    return NAVBAR_LINK_SIZES[descSize];
  }

  const textClass =
    { xs: "text-xs", sm: "text-sm", base: "text-base", lg: "text-lg", xl: "text-xl" }[
      descSize
    ] ?? "text-sm";
  const iconSize = { xs: 12, sm: 14, base: 16, lg: 18, xl: 20 }[descSize] ?? 14;
  const pad = { xs: "px-2 py-1", sm: "px-3 py-1.5", base: "px-4 py-2", lg: "px-4 py-2", xl: "px-4 py-2" }[
    descSize
  ] ?? "px-3 py-1.5";

  return { text: textClass, icon: iconSize, pad };
}

function resolveInverted(background, options = {}) {
  const { variant, scrolled = false, heroTone = "dark" } = options;

  if (variant === "transparent-hero" && !scrolled) {
    return heroTone === "dark";
  }

  return ["navy", "blur"].includes(background);
}

export function resolveNavbarStyles(styles = {}, options = {}) {
  const normalized = normalizeLegacyStyles(styles);
  const merged = { ...NAVBAR_STYLE_DEFAULTS, ...normalized };
  const { scrolled = false, variant } = options;

  let effectiveBackground = merged.background;
  if (variant === "transparent-hero" && scrolled) {
    effectiveBackground = merged.scrolledBackground ?? "blur";
  }

  const tokens = resolveStyleTokens(merged);
  const inverted = resolveInverted(effectiveBackground, options);
  const logoSize = NAVBAR_LOGO_SIZES[merged.logoSize] ?? NAVBAR_LOGO_SIZES.md;
  const linkSize = resolveLinkSize(merged.descSize);
  const padding = NAVBAR_PADDING[merged.paddingX] ?? NAVBAR_PADDING[6];
  const backgroundClass = resolveNavbarBackground(effectiveBackground);
  const borderClass = resolveNavbarBorder(merged.navbarBorder);

  const logoTextClass = inverted
    ? "text-ink-inverse"
    : resolveColorText(merged.logoColor, "surface");

  const logoIconBoxClass = [
    resolveColorBg(merged.accentColor, "primary"),
    tokens.iconRadiusClass,
    "transition-colors",
    merged.accentColor === "primary" ? "group-hover:bg-brand-dark" : "group-hover:opacity-90",
  ].join(" ");
  const logoIconClass = resolveColorText(merged.iconColor, "white");

  const mobileMenuClass =
    effectiveBackground === "navy"
      ? "border-border-dark bg-navy-elevated"
      : "border-border bg-surface";

  return {
    headerClass: `${borderClass} ${backgroundClass}`.trim(),
    innerClass: `mx-auto w-full max-w-7xl ${logoSize.bar} ${padding.padding} ${padding.gap}`,
    logoSize,
    linkSize,
    inverted,
    ctaStyle: merged.ctaStyle ?? "brand",
    mobileMenuClass,
    logoTextClass,
    logoIconBoxClass,
    logoIconClass,
    accentTextClass: tokens.accentTextClass,
    accentBgClass: tokens.accentBgClass,
    linkTextClass: `${linkSize.text} font-medium ${resolveColorText(merged.descColor, "muted")}`,
  };
}
