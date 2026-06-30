// ─── Defaults ─────────────────────────────────────────────────────────────────

export const FOOTER_STYLE_DEFAULTS = {
  // Layout
  paddingY:          6,

  // Background
  background:        "surface",

  // Logo
  logoColor:         "surface",
  logoSize:          "md",

  // Heading (column titles, newsletter title)
  headingColor:      "surface",
  headingSize:       "xs",
  headingWeight:     "semibold",

  // Body text (tagline, descriptions)
  descColor:         "muted",
  descSize:          "sm",

  // Links
  linkColor:         "muted",
  linkSize:          "sm",

  // Border
  borderColor:       "subtle",

  // Social icons
  iconColor:         "muted",
  iconBg:            "subtle",
  iconRadius:        "lg",

  // Accent (newsletter button, brand icon bg)
  accentColor:       "primary",
};

// ─── Schema ───────────────────────────────────────────────────────────────────

const COLOR_VALUES = '"primary" | "surface" | "muted" | "subtle" | "white"';

export const FOOTER_STYLE_PROP_SCHEMA = [
  { name: "paddingY",      type: "number",  default: 6,          allowedValues: "4 | 6 | 8 | 10 | 12",                                              description: "Vertical section padding" },
  { name: "background",    type: "string",  default: "surface",  allowedValues: COLOR_VALUES,                                                         description: "Footer background color token" },
  { name: "logoColor",     type: "string",  default: "surface",  allowedValues: COLOR_VALUES,                                                         description: "Logo text color token" },
  { name: "logoSize",      type: "string",  default: "md",       allowedValues: '"sm" | "md" | "lg" | "xl"',                                         description: "Logo size token" },
  { name: "headingColor",  type: "string",  default: "surface",  allowedValues: COLOR_VALUES,                                                         description: "Column title and section heading color" },
  { name: "headingSize",   type: "string",  default: "xs",       allowedValues: '"xs" | "sm" | "base"',                                              description: "Column title font size" },
  { name: "headingWeight", type: "string",  default: "semibold", allowedValues: '"normal" | "medium" | "semibold" | "bold" | "extrabold"',           description: "Column title font weight" },
  { name: "descColor",     type: "string",  default: "muted",    allowedValues: COLOR_VALUES,                                                         description: "Tagline and description text color" },
  { name: "descSize",      type: "string",  default: "sm",       allowedValues: '"xs" | "sm" | "base"',                                              description: "Description text font size" },
  { name: "linkColor",     type: "string",  default: "muted",    allowedValues: COLOR_VALUES,                                                         description: "Nav and legal link color" },
  { name: "linkSize",      type: "string",  default: "sm",       allowedValues: '"xs" | "sm" | "base"',                                              description: "Link font size" },
  { name: "borderColor",   type: "string",  default: "subtle",   allowedValues: COLOR_VALUES,                                                         description: "Divider and border color" },
  { name: "iconColor",     type: "string",  default: "muted",    allowedValues: COLOR_VALUES,                                                         description: "Social icon color" },
  { name: "iconBg",        type: "string",  default: "subtle",   allowedValues: '"primary" | "primaryMuted" | "surface" | "muted" | "subtle" | "white"', description: "Social icon container background" },
  { name: "iconRadius",    type: "string",  default: "lg",       allowedValues: '"none" | "sm" | "md" | "lg" | "xl" | "full"',                      description: "Social icon container radius" },
  { name: "accentColor",   type: "string",  default: "primary",  allowedValues: COLOR_VALUES,                                                         description: "Accent color for buttons and brand icon bg" },
];

// ─── Maps ─────────────────────────────────────────────────────────────────────

// primary = #e50913 (UpGrad red)
const COLOR_MAP = {
  primary:      { text: "text-[#e50913]", bg: "bg-[#e50913]",  border: "border-[#e50913]" },
  primaryMuted: { text: "text-[#e50913]", bg: "bg-[#fdecea]",  border: "border-[#fca5a5]" },
  surface:      { text: "text-gray-900",  bg: "bg-white",      border: "border-gray-900"  },
  muted:        { text: "text-gray-500",  bg: "bg-gray-50",    border: "border-gray-200"  },
  subtle:       { text: "text-gray-400",  bg: "bg-gray-100",   border: "border-gray-100"  },
  white:        { text: "text-white",     bg: "bg-white",      border: "border-white"     },
};

const BODY_SIZE_MAP = {
  xs: "text-xs", sm: "text-sm", base: "text-base",
};

const WEIGHT_MAP = {
  normal: "font-normal", medium: "font-medium", semibold: "font-semibold",
  bold: "font-bold", extrabold: "font-extrabold",
};

const RADIUS_MAP = {
  none: "rounded-none", sm: "rounded-sm", md: "rounded-md",
  lg: "rounded-lg", xl: "rounded-xl", full: "rounded-full",
};

const LOGO_SIZE_MAP = {
  sm: "h-6", md: "h-8", lg: "h-10", xl: "h-12",
};

const PADDING_Y_MAP = {
  4:  "py-8 sm:py-12",
  6:  "py-12 sm:py-16",
  8:  "py-16 sm:py-20",
  10: "py-20 sm:py-24",
  12: "py-24 sm:py-28",
};

// ─── Helper ───────────────────────────────────────────────────────────────────

function c(token, type) {
  return COLOR_MAP[token]?.[type] ?? COLOR_MAP.surface[type];
}

// ─── Resolver ─────────────────────────────────────────────────────────────────

export function resolveFooterStyles(styles = {}) {
  const s = { ...FOOTER_STYLE_DEFAULTS, ...styles };

  // Section
  const sectionClass = `${c(s.background, "bg")} ${PADDING_Y_MAP[s.paddingY] ?? PADDING_Y_MAP[6]}`;

  // Logo
  const logoClass    = `${LOGO_SIZE_MAP[s.logoSize] ?? LOGO_SIZE_MAP.md} ${c(s.logoColor, "text")}`;

  // Column heading
  const headingClass = [
    BODY_SIZE_MAP[s.headingSize]   ?? BODY_SIZE_MAP.xs,
    WEIGHT_MAP[s.headingWeight]    ?? WEIGHT_MAP.semibold,
    "uppercase tracking-wider",
    c(s.headingColor, "text"),
  ].join(" ");

  // Description / tagline
  const descClass = [
    BODY_SIZE_MAP[s.descSize]      ?? BODY_SIZE_MAP.sm,
    "leading-relaxed",
    c(s.descColor, "text"),
  ].join(" ");

  // Links
  const linkClass = [
    BODY_SIZE_MAP[s.linkSize]      ?? BODY_SIZE_MAP.sm,
    c(s.linkColor, "text"),
  ].join(" ");

  // Border
  const borderClass = c(s.borderColor, "border");

  // Social icons
  const iconClass = [
    c(s.iconColor, "text"),
    c(s.iconBg, "bg"),
    RADIUS_MAP[s.iconRadius]       ?? RADIUS_MAP.lg,
    borderClass,
  ].join(" ");

  // Accent
  const accentBgClass  = c(s.accentColor, "bg");
  const accentTextClass = c(s.accentColor, "text");

  return {
    sectionClass,
    logoClass,
    headingClass,
    descClass,
    linkClass,
    borderClass,
    iconClass,
    accentBgClass,
    accentTextClass,
  };
}