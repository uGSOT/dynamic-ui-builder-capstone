import {
  resolveColorBg,
  resolveColorBorder,
  resolveColorText,
  resolveStyleTokens,
  STYLE_PROP_SCHEMA,
} from "../styleTokens";

const STAT_VALUE_SIZE = {
  sm: "text-2xl sm:text-3xl",
  md: "text-3xl sm:text-4xl",
  lg: "text-4xl sm:text-5xl",
  xl: "text-5xl sm:text-6xl",
};

const STAT_CARD_RADIUS = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-3xl",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

const STAT_ICON_RADIUS = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-2xl",
  xl: "rounded-xl",
  full: "rounded-full",
};

const LEGACY_KEY_MAP = {
  paddingY: "paddingY",
  background: "background",
  fontColor: "titleColor",
  fontBoldness: "titleWeight",
  fontSize: "valueSize",
  cardColor: "cardBg",
  cardSize: "cardPaddingY",
  iconColor: "iconColor",
  "padding-y": "paddingY",
  "font-color": "titleColor",
  "font-boldness": "titleWeight",
  "font-size": "valueSize",
  "card-color": "cardBg",
  "card-size": "cardPaddingY",
  "icon-color": "iconColor",
};

const LEGACY_FONT_COLOR = {
  default: "primary",
  ink: "surface",
  inverse: "white",
  muted: "muted",
  brand: "primary",
  white: "white",
};

const LEGACY_FONT_WEIGHT = {
  normal: "normal",
  medium: "medium",
  bold: "semibold",
  "extra-bold": "extrabold",
};

const LEGACY_FONT_SIZE = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
};

const LEGACY_CARD_COLOR = {
  none: "surface",
  surface: "surface",
  muted: "muted",
  navy: "surface",
  brand: "primary",
};

const LEGACY_CARD_SIZE = {
  none: 6,
  sm: 4,
  md: 6,
  lg: 8,
};

const LEGACY_ICON_COLOR = {
  brand: "primary",
  ink: "surface",
  muted: "muted",
  inverse: "white",
  white: "white",
};

const LEGACY_BACKGROUND = {
  surface: "surface",
  muted: "muted",
  navy: "surface",
};

function normalizeLegacyStyles(styles = {}) {
  const normalized = {};

  for (const [key, value] of Object.entries(styles)) {
    const mappedKey = LEGACY_KEY_MAP[key] ?? key;

    switch (mappedKey) {
      case "titleColor":
        normalized.titleColor = LEGACY_FONT_COLOR[value] ?? value;
        break;
      case "titleWeight":
        normalized.titleWeight = LEGACY_FONT_WEIGHT[value] ?? value;
        break;
      case "valueSize":
        normalized.valueSize = LEGACY_FONT_SIZE[value] ?? value;
        break;
      case "cardBg":
        normalized.cardBg = LEGACY_CARD_COLOR[value] ?? value;
        break;
      case "cardPaddingY":
        normalized.cardPaddingY =
          typeof value === "string" ? (LEGACY_CARD_SIZE[value] ?? value) : value;
        break;
      case "iconColor":
        normalized.iconColor = LEGACY_ICON_COLOR[value] ?? value;
        break;
      case "background":
        normalized.background = LEGACY_BACKGROUND[value] ?? value;
        break;
      default:
        normalized[mappedKey] = value;
    }
  }

  return normalized;
}

export const STATS_STYLE_DEFAULTS = {
  background: "surface",
  paddingY: 8,
  paddingX: 6,
  headingColor: "surface",
  headingSize: "3xl",
  headingWeight: "bold",
  headingAlign: "center",
  subheadingColor: "muted",
  subheadingSize: "lg",
  subheadingWeight: "normal",
  cardBg: "surface",
  cardBorder: "sm",
  cardBorderColor: "subtle",
  cardRadius: "lg",
  cardShadow: "sm",
  cardPaddingY: 8,
  cardPaddingX: 6,
  titleColor: "primary",
  titleSize: "md",
  titleWeight: "extrabold",
  descColor: "muted",
  descSize: "sm",
  descWeight: "medium",
  iconColor: "primary",
  iconBg: "primary",
  iconSize: "md",
  iconRadius: "lg",
  accentColor: "primary",
};

export const STATS_STYLE_PROP_SCHEMA = STYLE_PROP_SCHEMA.map((entry) => {
  if (entry.name === "titleSize") {
    return {
      ...entry,
      default: "md",
      allowedValues: '"sm" | "md" | "lg" | "xl"',
      description: "Stat value font size",
    };
  }
  if (entry.name === "titleWeight") {
    return {
      ...entry,
      default: "extrabold",
      allowedValues: '"normal" | "medium" | "semibold" | "bold" | "extrabold"',
      description: "Stat value font weight",
    };
  }
  if (entry.name === "titleColor") {
    return {
      ...entry,
      default: "primary",
      description: "Stat value color",
    };
  }
  if (entry.name === "descColor") {
    return {
      ...entry,
      description: "Stat label color",
    };
  }
  if (entry.name === "descSize") {
    return {
      ...entry,
      description: "Stat label font size",
    };
  }
  if (entry.name === "descWeight") {
    return {
      ...entry,
      default: "medium",
      description: "Stat label font weight",
    };
  }
  return entry;
});

const STAT_FONT_WEIGHT = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

export function resolveStatsStyles(styles = {}) {
  const normalized = normalizeLegacyStyles(styles);
  const merged = { ...STATS_STYLE_DEFAULTS, ...normalized };
  const tokens = resolveStyleTokens(merged);

  const valueSize = STAT_VALUE_SIZE[merged.titleSize] ?? STAT_VALUE_SIZE.md;
  const valueWeight = STAT_FONT_WEIGHT[merged.titleWeight] ?? STAT_FONT_WEIGHT.extrabold;

  const cardRadiusClass = STAT_CARD_RADIUS[merged.cardRadius] ?? STAT_CARD_RADIUS.lg;
  const iconRadiusClass = STAT_ICON_RADIUS[merged.iconRadius] ?? STAT_ICON_RADIUS.lg;

  const borderWidthClass =
    merged.cardBorder === "none"
      ? ""
      : { none: "", sm: "border", md: "border-2", lg: "border-4" }[merged.cardBorder] ?? "border";

  const cardBorderClass =
    borderWidthClass === ""
      ? ""
      : `${borderWidthClass} ${resolveColorBorder(merged.cardBorderColor, "subtle")}`;

  const cardBgClass = resolveColorBg(merged.cardBg, "surface");
  const cardShadowClass =
    { none: "shadow-none", sm: "shadow-sm", md: "shadow-md", lg: "shadow-lg", xl: "shadow-xl" }[
      merged.cardShadow
    ] ?? "shadow-sm";

  return {
    sectionClass: tokens.sectionClass,
    containerPaddingX: tokens.containerPaddingX,
    inverted: false,

    headingClass: tokens.headingClass,
    subheadingClass: tokens.subheadingClass,

    valueClass: `${valueSize} ${valueWeight} ${resolveColorText(merged.titleColor, "primary")}`,
    labelClass: `${tokens.descClass}`,

    cardClass: [cardBgClass, cardBorderClass, cardRadiusClass, cardShadowClass]
      .filter(Boolean)
      .join(" "),
    cardPaddingClass: tokens.cardPaddingClass,

    iconWrapperClass: `${tokens.iconBgClass} ${tokens.iconContainerClass} ${iconRadiusClass}`,
    iconTextClass: tokens.iconColorClass,
    iconPixelSize: tokens.iconPixelSize,
  };
}
