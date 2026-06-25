const PADDING_Y = {
  4: "py-8 sm:py-12",
  6: "py-12 sm:py-16",
  8: "py-16 sm:py-20",
  10: "py-20 sm:py-24",
};

const BACKGROUND = {
  surface: "bg-surface",
  muted: "bg-surface-muted",
  navy: "bg-navy",
};

export function resolveHeroStyles(styles = {}) {
  const padding = PADDING_Y[styles.paddingY] ?? "py-20 sm:py-24";
  const background = BACKGROUND[styles.background] ?? "bg-surface";
  const inverted = styles.background === "navy";

  return {
    className: `${padding} ${background}`,
    inverted,
  };
}

export const HERO_STYLE_DEFAULTS = {
  paddingY: 10,
  background: "surface",
};

export const HERO_STYLE_PROP_SCHEMA = [
  {
    name: "paddingY",
    type: "number",
    default: 10,
    allowedValues: "4 | 6 | 8 | 10",
    description: "Vertical section padding scale",
  },
  {
    name: "background",
    type: "string",
    default: "surface",
    allowedValues: "surface | muted | navy",
    description: "Section background design token",
  },
];
