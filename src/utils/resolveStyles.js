const COLOR_VALUES = '"primary" | "surface" | "muted" | "subtle" | "white"';

export const STYLE_DEFAULTS = {
  paddingY:        6,
  background:      "white",
  headingColor:    "surface",
  headingSize:     "4xl",
  headingWeight:   "bold",
  headingAlign:    "left",
  subheadingColor: "muted",
  subheadingSize:  "lg",
  subheadingWeight:"normal",
  cardBg:          "white",
  cardBorder:      "sm",
  cardBorderColor: "subtle",
  cardRadius:      "2xl",
  cardShadow:      "none",
  cardPaddingY:    6,
  cardPaddingX:    6,
  titleColor:      "surface",
  titleSize:       "base",
  titleWeight:     "semibold",
  descColor:       "muted",
  descSize:        "sm",
  descWeight:      "normal",
  iconColor:       "primary",
  iconBg:          "primaryMuted",
  iconSize:        "md",
  iconRadius:      "lg",
  accentColor:     "primary",
};

export const STYLE_PROP_SCHEMA = [
  { name: "paddingY",         type: "number",  default: 6,          allowedValues: "4 | 6 | 8 | 10 | 12",                                                    description: "Vertical section padding" },
  { name: "background",       type: "string",  default: "white",    allowedValues: COLOR_VALUES,                                                               description: "Section background color token" },
  { name: "headingColor",     type: "string",  default: "surface",  allowedValues: COLOR_VALUES,                                                               description: "Heading text color token" },
  { name: "headingSize",      type: "string",  default: "4xl",      allowedValues: '"2xl" | "3xl" | "4xl" | "5xl" | "6xl"',                                   description: "Heading font size" },
  { name: "headingWeight",    type: "string",  default: "bold",     allowedValues: '"normal" | "medium" | "semibold" | "bold" | "extrabold"',                  description: "Heading font weight" },
  { name: "headingAlign",     type: "string",  default: "left",     allowedValues: '"left" | "center" | "right"',                                             description: "Heading alignment" },
  { name: "subheadingColor",  type: "string",  default: "muted",    allowedValues: COLOR_VALUES,                                                               description: "Subheading text color token" },
  { name: "subheadingSize",   type: "string",  default: "lg",       allowedValues: '"sm" | "base" | "lg" | "xl"',                                             description: "Subheading font size" },
  { name: "subheadingWeight", type: "string",  default: "normal",   allowedValues: '"normal" | "medium" | "semibold" | "bold"',                               description: "Subheading font weight" },
  { name: "cardBg",           type: "string",  default: "white",    allowedValues: COLOR_VALUES,                                                               description: "Card background color token" },
  { name: "cardBorder",       type: "string",  default: "sm",       allowedValues: '"none" | "sm" | "md" | "lg"',                                             description: "Card border thickness" },
  { name: "cardBorderColor",  type: "string",  default: "subtle",   allowedValues: COLOR_VALUES,                                                               description: "Card border color token" },
  { name: "cardRadius",       type: "string",  default: "2xl",      allowedValues: '"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"',                    description: "Card border radius" },
  { name: "cardShadow",       type: "string",  default: "none",     allowedValues: '"none" | "sm" | "md" | "lg" | "xl"',                                      description: "Card drop shadow" },
  { name: "cardPaddingY",     type: "number",  default: 6,          allowedValues: "4 | 6 | 8 | 10",                                                          description: "Card vertical padding" },
  { name: "cardPaddingX",     type: "number",  default: 6,          allowedValues: "4 | 6 | 8 | 10",                                                          description: "Card horizontal padding" },
  { name: "titleColor",       type: "string",  default: "surface",  allowedValues: COLOR_VALUES,                                                               description: "Card title color token" },
  { name: "titleSize",        type: "string",  default: "base",     allowedValues: '"sm" | "base" | "lg" | "xl"',                                             description: "Card title font size" },
  { name: "titleWeight",      type: "string",  default: "semibold", allowedValues: '"normal" | "medium" | "semibold" | "bold"',                               description: "Card title font weight" },
  { name: "descColor",        type: "string",  default: "muted",    allowedValues: COLOR_VALUES,                                                               description: "Card description color token" },
  { name: "descSize",         type: "string",  default: "sm",       allowedValues: '"xs" | "sm" | "base"',                                                    description: "Card description font size" },
  { name: "descWeight",       type: "string",  default: "normal",   allowedValues: '"normal" | "medium" | "semibold"',                                        description: "Card description font weight" },
  { name: "iconColor",        type: "string",  default: "primary",  allowedValues: '"primary" | "primaryMuted" | "surface" | "muted" | "subtle" | "white"',  description: "Icon color token" },
  { name: "iconBg",           type: "string",  default: "primaryMuted", allowedValues: '"primary" | "primaryMuted" | "surface" | "muted" | "subtle" | "white"', description: "Icon container background" },
  { name: "iconSize",         type: "string",  default: "md",       allowedValues: '"sm" | "md" | "lg" | "xl"',                                               description: "Icon size" },
  { name: "iconRadius",       type: "string",  default: "lg",       allowedValues: '"none" | "sm" | "md" | "lg" | "xl" | "full"',                            description: "Icon container border radius" },
  { name: "logoSize",         type: "string",  default: "md",       allowedValues: '"sm" | "md" | "lg" | "xl"',                                               description: "Logo display size" },
  { name: "logoColor",        type: "string",  default: "muted",    allowedValues: COLOR_VALUES,                                                               description: "Logo tint color token" },
  { name: "logoOpacity",      type: "string",  default: "100",      allowedValues: '"50" | "60" | "75" | "100"',                                              description: "Logo opacity" },
  { name: "accentColor",      type: "string",  default: "primary",  allowedValues: COLOR_VALUES,                                                               description: "Accent color for tags, bullets, highlights" },
];

export const COLOR_MAP = {
  primary:      { text: "text-[#e50913]", bg: "bg-[#e50913]", border: "border-[#e50913]" },
  primaryMuted: { text: "text-[#e50913]", bg: "bg-[#fdecea]", border: "border-[#fca5a5]" },
  surface:      { text: "text-gray-900",  bg: "bg-white",     border: "border-gray-900"  },
  muted:        { text: "text-gray-500",  bg: "bg-gray-50",   border: "border-gray-200"  },
  subtle:       { text: "text-gray-400",  bg: "bg-gray-100",  border: "border-gray-100"  },
  white:        { text: "text-white",     bg: "bg-white",     border: "border-white"     },
};

export const HEADING_SIZE_MAP = {
  "2xl": "text-2xl",
  "3xl": "text-3xl sm:text-4xl",
  "4xl": "text-4xl sm:text-5xl",
  "5xl": "text-5xl sm:text-6xl",
  "6xl": "text-6xl sm:text-7xl",
};

export const BODY_SIZE_MAP = {
  xs: "text-xs", sm: "text-sm", base: "text-base", lg: "text-lg", xl: "text-xl",
};

export const WEIGHT_MAP = {
  normal: "font-normal", medium: "font-medium", semibold: "font-semibold",
  bold: "font-bold", extrabold: "font-extrabold",
};

export const BORDER_MAP = {
  none: "border-0", sm: "border", md: "border-2", lg: "border-4",
};

export const RADIUS_MAP = {
  none: "rounded-none", sm: "rounded-sm", md: "rounded-md", lg: "rounded-lg",
  xl: "rounded-xl", "2xl": "rounded-2xl", full: "rounded-full",
};

export const SHADOW_MAP = {
  none: "shadow-none", sm: "shadow-sm", md: "shadow-md", lg: "shadow-lg", xl: "shadow-xl",
};

export const ICON_SIZE_MAP = {
  sm: { container: "h-8 w-8", px: 14 },
  md: { container: "h-10 w-10", px: 18 },
  lg: { container: "h-12 w-12", px: 22 },
  xl: { container: "h-14 w-14", px: 28 },
};

export const LOGO_SIZE_MAP = {
  sm: "h-6", md: "h-8", lg: "h-10", xl: "h-12"
};

export const PADDING_MAP = {
  4: { y: "py-8 sm:py-10", x: "px-4", p: "p-4" },
  6: { y: "py-10 sm:py-12", x: "px-6", p: "p-6" },
  8: { y: "py-12 sm:py-16", x: "px-8", p: "p-8" },
  10: { y: "py-16 sm:py-20", x: "px-10", p: "p-10" },
  12: { y: "py-20 sm:py-24", x: "px-12", p: "p-12" },
};

function c(token, type) {
  return COLOR_MAP[token]?.[type] ?? COLOR_MAP.surface[type];
}

export function resolveStyles(styles = {}) {
  const s = { ...STYLE_DEFAULTS, ...styles };

  const sectionClass = `${c(s.background, "bg")} ${PADDING_MAP[s.paddingY]?.y ?? PADDING_MAP[6].y}`;

  const headingAlignClass = s.headingAlign === "center" ? "text-center" : s.headingAlign === "right" ? "text-right" : "text-left";
  const headingClass = [
    HEADING_SIZE_MAP[s.headingSize] ?? HEADING_SIZE_MAP["4xl"],
    WEIGHT_MAP[s.headingWeight] ?? WEIGHT_MAP.bold,
    "tracking-tight",
    c(s.headingColor, "text"),
    headingAlignClass
  ].filter(Boolean).join(" ");

  const subheadingClass = [
    BODY_SIZE_MAP[s.subheadingSize] ?? BODY_SIZE_MAP.lg,
    WEIGHT_MAP[s.subheadingWeight] ?? WEIGHT_MAP.normal,
    "leading-relaxed",
    c(s.subheadingColor, "text"),
    headingAlignClass
  ].filter(Boolean).join(" ");

  const cardClass = [
    c(s.cardBg, "bg"),
    BORDER_MAP[s.cardBorder] ?? BORDER_MAP.sm,
    c(s.cardBorderColor, "border"),
    RADIUS_MAP[s.cardRadius] ?? RADIUS_MAP.lg,
    SHADOW_MAP[s.cardShadow] ?? SHADOW_MAP.none,
    PADDING_MAP[s.cardPaddingY]?.y ?? PADDING_MAP[6].y,
    PADDING_MAP[s.cardPaddingX]?.x ?? PADDING_MAP[6].x
  ].filter(Boolean).join(" ");

  const titleClass = [
    BODY_SIZE_MAP[s.titleSize] ?? BODY_SIZE_MAP.base,
    WEIGHT_MAP[s.titleWeight] ?? WEIGHT_MAP.semibold,
    c(s.titleColor, "text"),
  ].filter(Boolean).join(" ");

  const descClass = [
    BODY_SIZE_MAP[s.descSize] ?? BODY_SIZE_MAP.sm,
    WEIGHT_MAP[s.descWeight] ?? WEIGHT_MAP.normal,
    "leading-relaxed",
    c(s.descColor, "text"),
  ].filter(Boolean).join(" ");

  const iconTokens = ICON_SIZE_MAP[s.iconSize] ?? ICON_SIZE_MAP.md;
  const iconContainerClass = [
    iconTokens.container,
    RADIUS_MAP[s.iconRadius] ?? RADIUS_MAP.lg,
    c(s.iconBg, "bg"),
  ].filter(Boolean).join(" ");

  const logoClass = [
    LOGO_SIZE_MAP[s.logoSize] ?? LOGO_SIZE_MAP.md,
    c(s.logoColor, "text"),
    `opacity-${s.logoOpacity ?? "100"}`
  ].filter(Boolean).join(" ");

  const accent = {
    text: c(s.accentColor, "text"),
    bg: c(s.accentColor, "bg"),
    border: c(s.accentColor, "border"),
  };

  return {
    sectionClass,
    headingAlign: s.headingAlign ?? "left",
    headingClass,
    subheadingClass,
    cardClass,
    titleClass,
    descClass,
    iconContainerClass,
    iconClass: c(s.iconColor, "text"),
    iconPixelSize: iconTokens.px,
    logoClass,
    accent,
  };
}
