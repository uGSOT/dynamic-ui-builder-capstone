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

export function resolveFaqStyles(styles = {}) {
  const padding = PADDING_Y[styles.paddingY] ?? "py-16";
  const background = BACKGROUND[styles.background] ?? "bg-surface";
  const inverted = styles.background === "navy";

  return {
    className: `${padding} ${background}`,
    inverted,
  };
}

export const FAQ_STYLE_DEFAULTS = {
  paddingY: 8,
  background: "surface",
};

export const FAQ_STYLE_PROP_SCHEMA = [
  {
    name: "paddingY",
    type: "number",
    default: 8,
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
