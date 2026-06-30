const COLOR_TEXT = {
  primary: "text-brand",
  surface: "text-ink",
  muted: "text-ink-muted",
  subtle: "text-ink-subtle",
  white: "text-white",
};

const COLOR_BG = {
  primary: "bg-brand",
  surface: "bg-surface",
  muted: "bg-surface-muted",
  subtle: "bg-surface-subtle",
  white: "bg-white",
};

const COLOR_BORDER = {
  primary: "border-brand",
  surface: "border-border",
  muted: "border-border",
  subtle: "border-border",
  white: "border-white",
};

const ICON_BG = {
  primary: "bg-brand/10",
  surface: "bg-surface",
  muted: "bg-surface-muted",
  subtle: "bg-surface-subtle",
  white: "bg-white/10",
};

const SECTION_PADDING_Y = {
  4: "py-8",
  6: "py-12",
  8: "py-16",
  10: "py-20",
  12: "py-24",
};

const SECTION_PADDING_X = {
  4: "px-4",
  6: "px-6",
  8: "px-8",
  10: "px-10",
  12: "px-12",
};

const CARD_PADDING_Y = {
  4: "py-4",
  6: "py-6",
  8: "py-8",
  10: "py-10",
};

const CARD_PADDING_X = {
  4: "px-4",
  6: "px-6",
  8: "px-8",
  10: "px-10",
};

const HEADING_SIZE = {
  "2xl": "text-2xl",
  "3xl": "text-3xl sm:text-4xl",
  "4xl": "text-4xl sm:text-5xl",
  "5xl": "text-5xl sm:text-6xl",
  "6xl": "text-6xl sm:text-7xl",
};

const BODY_SIZE = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const FONT_WEIGHT = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

const TEXT_ALIGN = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const BORDER_WIDTH = {
  none: "border-0",
  sm: "border",
  md: "border-2",
  lg: "border-4",
};

const RADIUS = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

const SHADOW = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
};

const ICON_SIZE = {
  sm: { icon: 14, container: "h-8 w-8" },
  md: { icon: 18, container: "h-10 w-10" },
  lg: { icon: 22, container: "h-12 w-12" },
  xl: { icon: 28, container: "h-14 w-14" },
};

const LOGO_SIZE = {
  sm: "h-6",
  md: "h-8",
  lg: "h-10",
  xl: "h-12",
};

const LOGO_OPACITY = {
  50: "opacity-50",
  60: "opacity-60",
  75: "opacity-75",
  100: "opacity-100",
};

export const STYLE_DEFAULTS = {
  background: "surface",
  paddingY: 6,
  paddingX: 6,
  headingColor: "white",
  headingSize: "4xl",
  headingWeight: "bold",
  headingAlign: "left",
  subheadingColor: "muted",
  subheadingSize: "lg",
  subheadingWeight: "normal",
  cardBg: "muted",
  cardBorder: "sm",
  cardBorderColor: "subtle",
  cardRadius: "lg",
  cardShadow: "none",
  cardPaddingY: 6,
  cardPaddingX: 6,
  titleColor: "white",
  titleSize: "base",
  titleWeight: "semibold",
  descColor: "muted",
  descSize: "sm",
  descWeight: "normal",
  iconColor: "primary",
  iconBg: "subtle",
  iconSize: "md",
  iconRadius: "lg",
  logoSize: "md",
  logoColor: "muted",
  logoOpacity: "100",
  accentColor: "primary",
};

function pick(map, key, fallbackKey) {
  return map[key] ?? map[fallbackKey];
}

export function resolveColorText(token, fallback = "surface") {
  return pick(COLOR_TEXT, token, fallback);
}

export function resolveColorBg(token, fallback = "surface") {
  return pick(COLOR_BG, token, fallback);
}

export function resolveColorBorder(token, fallback = "subtle") {
  return pick(COLOR_BORDER, token, fallback);
}

export function resolveStyleTokens(styles = {}) {
  const s = { ...STYLE_DEFAULTS, ...styles };

  return {
    sectionClass: [
      pick(SECTION_PADDING_Y, s.paddingY, 6),
      resolveColorBg(s.background, "surface"),
    ].join(" "),
    containerPaddingX: pick(SECTION_PADDING_X, s.paddingX, 6),

    headingClass: [
      "tracking-tight",
      pick(HEADING_SIZE, s.headingSize, "4xl"),
      pick(FONT_WEIGHT, s.headingWeight, "bold"),
      resolveColorText(s.headingColor, "white"),
      pick(TEXT_ALIGN, s.headingAlign, "left"),
    ].join(" "),

    subheadingClass: [
      "leading-relaxed",
      pick(BODY_SIZE, s.subheadingSize, "lg"),
      pick(FONT_WEIGHT, s.subheadingWeight, "normal"),
      resolveColorText(s.subheadingColor, "muted"),
    ].join(" "),

    cardClass: [
      resolveColorBg(s.cardBg, "muted"),
      s.cardBorder === "none" ? "" : pick(BORDER_WIDTH, s.cardBorder, "sm"),
      s.cardBorder === "none" ? "" : resolveColorBorder(s.cardBorderColor, "subtle"),
      pick(RADIUS, s.cardRadius, "lg"),
      pick(SHADOW, s.cardShadow, "none"),
    ]
      .filter(Boolean)
      .join(" "),

    cardPaddingClass: [
      pick(CARD_PADDING_Y, s.cardPaddingY, 6),
      pick(CARD_PADDING_X, s.cardPaddingX, 6),
    ].join(" "),

    titleClass: [
      pick(BODY_SIZE, s.titleSize, "base"),
      pick(FONT_WEIGHT, s.titleWeight, "semibold"),
      resolveColorText(s.titleColor, "white"),
    ].join(" "),

    descClass: [
      pick(BODY_SIZE, s.descSize, "sm"),
      pick(FONT_WEIGHT, s.descWeight, "normal"),
      resolveColorText(s.descColor, "muted"),
    ].join(" "),

    iconColorClass: resolveColorText(s.iconColor, "primary"),
    iconBgClass: pick(ICON_BG, s.iconBg, "subtle"),
    iconContainerClass: pick(ICON_SIZE, s.iconSize, "md").container,
    iconPixelSize: pick(ICON_SIZE, s.iconSize, "md").icon,
    iconRadiusClass: pick(RADIUS, s.iconRadius, "lg"),

    logoSizeClass: pick(LOGO_SIZE, s.logoSize, "md"),
    logoColorClass: resolveColorText(s.logoColor, "muted"),
    logoOpacityClass: pick(LOGO_OPACITY, s.logoOpacity, "100"),

    accentTextClass: resolveColorText(s.accentColor, "primary"),
    accentBgClass: pick(ICON_BG, s.accentColor, "primary"),
  };
}

export const STYLE_PROP_SCHEMA = [
  { name: "background", type: "string", default: STYLE_DEFAULTS.background, allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"', description: "Section background color" },
  { name: "paddingY", type: "number", default: STYLE_DEFAULTS.paddingY, allowedValues: "4 | 6 | 8 | 10 | 12", description: "Vertical section padding scale" },
  { name: "paddingX", type: "number", default: STYLE_DEFAULTS.paddingX, allowedValues: "4 | 6 | 8 | 10 | 12", description: "Horizontal section padding scale" },
  { name: "headingColor", type: "string", default: STYLE_DEFAULTS.headingColor, allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"', description: "Heading text color" },
  { name: "headingSize", type: "string", default: STYLE_DEFAULTS.headingSize, allowedValues: '"2xl" | "3xl" | "4xl" | "5xl" | "6xl"', description: "Heading font size" },
  { name: "headingWeight", type: "string", default: STYLE_DEFAULTS.headingWeight, allowedValues: '"normal" | "medium" | "semibold" | "bold" | "extrabold"', description: "Heading font weight" },
  { name: "headingAlign", type: "string", default: STYLE_DEFAULTS.headingAlign, allowedValues: '"left" | "center" | "right"', description: "Heading alignment" },
  { name: "subheadingColor", type: "string", default: STYLE_DEFAULTS.subheadingColor, allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"', description: "Subheading text color" },
  { name: "subheadingSize", type: "string", default: STYLE_DEFAULTS.subheadingSize, allowedValues: '"sm" | "base" | "lg" | "xl"', description: "Subheading font size" },
  { name: "subheadingWeight", type: "string", default: STYLE_DEFAULTS.subheadingWeight, allowedValues: '"normal" | "medium" | "semibold" | "bold"', description: "Subheading font weight" },
  { name: "cardBg", type: "string", default: STYLE_DEFAULTS.cardBg, allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"', description: "Card background color" },
  { name: "cardBorder", type: "string", default: STYLE_DEFAULTS.cardBorder, allowedValues: '"none" | "sm" | "md" | "lg"', description: "Card border thickness" },
  { name: "cardBorderColor", type: "string", default: STYLE_DEFAULTS.cardBorderColor, allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"', description: "Card border color" },
  { name: "cardRadius", type: "string", default: STYLE_DEFAULTS.cardRadius, allowedValues: '"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"', description: "Card border radius" },
  { name: "cardShadow", type: "string", default: STYLE_DEFAULTS.cardShadow, allowedValues: '"none" | "sm" | "md" | "lg" | "xl"', description: "Card drop shadow" },
  { name: "cardPaddingY", type: "number", default: STYLE_DEFAULTS.cardPaddingY, allowedValues: "4 | 6 | 8 | 10", description: "Card vertical padding" },
  { name: "cardPaddingX", type: "number", default: STYLE_DEFAULTS.cardPaddingX, allowedValues: "4 | 6 | 8 | 10", description: "Card horizontal padding" },
  { name: "titleColor", type: "string", default: STYLE_DEFAULTS.titleColor, allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"', description: "Card title color" },
  { name: "titleSize", type: "string", default: STYLE_DEFAULTS.titleSize, allowedValues: '"sm" | "base" | "lg" | "xl"', description: "Card title font size" },
  { name: "titleWeight", type: "string", default: STYLE_DEFAULTS.titleWeight, allowedValues: '"normal" | "medium" | "semibold" | "bold"', description: "Card title font weight" },
  { name: "descColor", type: "string", default: STYLE_DEFAULTS.descColor, allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"', description: "Card description color" },
  { name: "descSize", type: "string", default: STYLE_DEFAULTS.descSize, allowedValues: '"xs" | "sm" | "base"', description: "Card description font size" },
  { name: "descWeight", type: "string", default: STYLE_DEFAULTS.descWeight, allowedValues: '"normal" | "medium" | "semibold"', description: "Card description font weight" },
  { name: "iconColor", type: "string", default: STYLE_DEFAULTS.iconColor, allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"', description: "Icon color" },
  { name: "iconBg", type: "string", default: STYLE_DEFAULTS.iconBg, allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"', description: "Icon container background" },
  { name: "iconSize", type: "string", default: STYLE_DEFAULTS.iconSize, allowedValues: '"sm" | "md" | "lg" | "xl"', description: "Icon size" },
  { name: "iconRadius", type: "string", default: STYLE_DEFAULTS.iconRadius, allowedValues: '"none" | "sm" | "md" | "lg" | "xl" | "full"', description: "Icon container border radius" },
  { name: "logoSize", type: "string", default: STYLE_DEFAULTS.logoSize, allowedValues: '"sm" | "md" | "lg" | "xl"', description: "Logo display size" },
  { name: "logoColor", type: "string", default: STYLE_DEFAULTS.logoColor, allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"', description: "Logo tint color" },
  { name: "logoOpacity", type: "string", default: STYLE_DEFAULTS.logoOpacity, allowedValues: '"50" | "60" | "75" | "100"', description: "Logo opacity" },
  { name: "accentColor", type: "string", default: STYLE_DEFAULTS.accentColor, allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"', description: "Global accent color" },
];
