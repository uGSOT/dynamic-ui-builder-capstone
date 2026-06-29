const PADDING_Y = {
  4: "py-8",
  6: "py-12",
  8: "py-16",
  10: "py-20",
};

const BACKGROUND = {
  surface: "bg-surface",
  muted: "bg-muted",
  navy: "bg-secondary",
};

const FONT_COLORS = {
  default: {
    value: "text-primary",
    label: "text-ink-muted",
    icon: "text-primary",
  },
  ink: {
    value: "text-text",
    label: "text-ink-muted",
    icon: "text-text",
  },
  inverse: {
    value: "text-ink-inverse",
    label: "text-ink-inverse-muted",
    icon: "text-ink-inverse",
  },
  muted: {
    value: "text-ink-muted",
    label: "text-ink-muted",
    icon: "text-ink-muted",
  },
  brand: {
    value: "text-primary",
    label: "text-primary",
    icon: "text-primary",
  },
  white: {
    value: "text-white",
    label: "text-white/80",
    icon: "text-white",
  },
};

const FONT_WEIGHTS = {
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-semibold",
  "extra-bold": "font-extrabold",
};

const FONT_SIZES = {
  sm: "text-2xl sm:text-3xl",
  md: "text-3xl sm:text-4xl",
  lg: "text-4xl sm:text-5xl",
  xl: "text-5xl sm:text-6xl",
};

const CARD_COLORS = {
  none: "",
  surface: "bg-surface",
  muted: "bg-muted",
  navy: "bg-secondary",
  brand: "bg-primary/10",
};

const CARD_SIZES = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const ICON_COLORS = {
  brand: { wrapper: "bg-primary/10 text-primary", text: "text-primary" },
  ink: { wrapper: "bg-text/10 text-text", text: "text-text" },
  muted: { wrapper: "bg-ink-muted/10 text-ink-muted", text: "text-ink-muted" },
  inverse: { wrapper: "bg-white/10 text-ink-inverse", text: "text-ink-inverse" },
  white: { wrapper: "bg-white/10 text-white", text: "text-white" },
};

const STYLE_KEY_MAP = {
  "padding-y": "paddingY",
  "font-color": "fontColor",
  "font-boldness": "fontBoldness",
  "font-size": "fontSize",
  "card-color": "cardColor",
  "card-size": "cardSize",
  "icon-color": "iconColor",
};

function normalizeStyles(styles = {}) {
  return Object.entries(styles).reduce((normalized, [key, value]) => {
    const mappedKey = STYLE_KEY_MAP[key] ?? key;
    normalized[mappedKey] = value;
    return normalized;
  }, {});
}

export function resolveStatsStyles(styles = {}) {
  const normalizedStyles = normalizeStyles(styles);
  const padding = PADDING_Y[normalizedStyles.paddingY] ?? PADDING_Y[8];
  const background = BACKGROUND[normalizedStyles.background] ?? BACKGROUND.surface;
  const inverted = normalizedStyles.background === "navy";
  const fontColor = FONT_COLORS[normalizedStyles.fontColor] ?? FONT_COLORS.default;
  const fontWeight = FONT_WEIGHTS[normalizedStyles.fontBoldness] ?? FONT_WEIGHTS["extra-bold"];
  const fontSize = FONT_SIZES[normalizedStyles.fontSize] ?? FONT_SIZES.md;
  const cardColorClass = CARD_COLORS[normalizedStyles.cardColor] ?? CARD_COLORS.none;
  const cardSizeClass = CARD_SIZES[normalizedStyles.cardSize] ?? CARD_SIZES.none;
  const iconColor = ICON_COLORS[normalizedStyles.iconColor] ?? ICON_COLORS.brand;

  return {
    className: `${padding} ${background}`.trim(),
    inverted,
    valueClass: `${fontSize} ${fontWeight} ${fontColor.value}`,
    labelClass: `${fontColor.label}`,
    cardColorClass,
    cardSizeClass,
    iconWrapperClass: iconColor.wrapper,
    iconTextClass: iconColor.text,
  };
}

export const STATS_STYLE_DEFAULTS = {
  paddingY: 8,
  background: "surface",
  fontColor: "default",
  fontBoldness: "extra-bold",
  fontSize: "md",
  cardColor: "none",
  iconColor: "brand",
  cardSize: "none",
};

export const STATS_STYLE_PROP_SCHEMA = [
  {
    name: "paddingY",
    type: "number",
    default: STATS_STYLE_DEFAULTS.paddingY,
    allowedValues: "4 | 6 | 8 | 10",
    description: "Vertical section padding scale",
  },
  {
    name: "background",
    type: "string",
    default: STATS_STYLE_DEFAULTS.background,
    allowedValues: "surface | muted | navy",
    description: "Section background design token",
  },
  {
    name: "fontColor",
    type: "string",
    default: STATS_STYLE_DEFAULTS.fontColor,
    allowedValues: "default | ink | inverse | muted | brand | white",
    description: "Color token for stat text and icons",
  },
  {
    name: "fontBoldness",
    type: "string",
    default: STATS_STYLE_DEFAULTS.fontBoldness,
    allowedValues: "normal | medium | bold | extra-bold",
    description: "Weight of the stat value text",
  },
  {
    name: "fontSize",
    type: "string",
    default: STATS_STYLE_DEFAULTS.fontSize,
    allowedValues: "sm | md | lg | xl",
    description: "Size of the stat value text",
  },
  {
    name: "cardColor",
    type: "string",
    default: STATS_STYLE_DEFAULTS.cardColor,
    allowedValues: "none | surface | muted | navy | brand",
    description: "Background color for each stat card",
  },
  {
    name: "cardSize",
    type: "string",
    default: STATS_STYLE_DEFAULTS.cardSize,
    allowedValues: "none | sm | md | lg",
    description: "Padding size for each stat card",
  },
  {
    name: "iconColor",
    type: "string",
    default: STATS_STYLE_DEFAULTS.iconColor,
    allowedValues: "brand | ink | muted | inverse | white",
    description: "Color token for stat icons",
  },
];
