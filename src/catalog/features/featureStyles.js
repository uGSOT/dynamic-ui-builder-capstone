export const FEATURE_STYLE_DEFAULTS = {
  paddingY: 6,         
  background: "white", 
  headingAlign: "left", 
  accentColor: "indigo", 
};

export const FEATURE_STYLE_PROP_SCHEMA = [
  {
    name: "paddingY",
    type: "number",
    default: FEATURE_STYLE_DEFAULTS.paddingY,
    allowedValues: "1 – 12",
    description: "Vertical padding of the section (maps to Tailwind py-*)",
  },
  {
    name: "background",
    type: "string",
    default: FEATURE_STYLE_DEFAULTS.background,
    allowedValues: '"white" | "gray" | "dark"',
    description: "Background colour of the section",
  },
  {
    name: "headingAlign",
    type: "string",
    default: FEATURE_STYLE_DEFAULTS.headingAlign,
    allowedValues: '"left" | "center"',
    description: "Alignment of the section heading and subheading",
  },
  {
    name: "accentColor",
    type: "string",
    default: FEATURE_STYLE_DEFAULTS.accentColor,
    allowedValues: '"indigo" | "violet" | "emerald" | "rose" | "blue"',
    description: "Accent colour used for icons and highlights",
  },
];

const BG_MAP = {
  surface: "bg-surface",
  muted: "bg-surface-muted",
  navy: "bg-navy",
};

const ACCENT_MAP = {
  indigo:  { iconBg: "bg-indigo-50",  iconText: "text-indigo-600",  tagText: "text-indigo-600",  tagBg: "bg-indigo-50",  border: "border-indigo-100" },
  violet:  { iconBg: "bg-violet-50",  iconText: "text-violet-600",  tagText: "text-violet-600",  tagBg: "bg-violet-50",  border: "border-violet-100" },
  emerald: { iconBg: "bg-emerald-50", iconText: "text-emerald-600", tagText: "text-emerald-600", tagBg: "bg-emerald-50", border: "border-emerald-100" },
  rose:    { iconBg: "bg-rose-50",    iconText: "text-rose-600",    tagText: "text-rose-600",    tagBg: "bg-rose-50",    border: "border-rose-100"   },
  blue:    { iconBg: "bg-blue-50",    iconText: "text-blue-600",    tagText: "text-blue-600",    tagBg: "bg-blue-50",    border: "border-blue-100"   },
};

export function resolveFeatureStyles(styles = {}) {
  const merged = { ...FEATURE_STYLE_DEFAULTS, ...styles };
  const bg      = BG_MAP[merged.background] ?? BG_MAP.white;
  const py      = `py-${merged.paddingY}`;
  const inverted = merged.background === "dark";
  const accent  = ACCENT_MAP[merged.accentColor] ?? ACCENT_MAP.indigo;

  return {
    sectionClass: `${bg} ${py}`,
    inverted,
    accent,
    headingAlign: merged.headingAlign ?? "left",
  };
}
