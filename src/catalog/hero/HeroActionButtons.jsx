const VARIANTS = {
  primary: "bg-brand text-ink-inverse hover:bg-brand-dark",
  secondary:
    "border border-border bg-surface text-ink hover:bg-surface-muted",
  ghost: "text-ink hover:bg-surface-muted",
};

const INVERTED_VARIANTS = {
  primary: "bg-ink-inverse text-ink hover:bg-ink-inverse/90",
  secondary:
    "border border-white/30 bg-transparent text-ink-inverse hover:bg-white/10",
  ghost: "text-ink-inverse hover:bg-white/10",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function HeroActionButtons({
  primaryAction,
  secondaryAction,
  align = "center",
  inverted = false,
}) {
  const justify =
    align === "center"
      ? "justify-center"
      : align === "right"
        ? "justify-end"
        : "justify-start";

  const palette = inverted ? INVERTED_VARIANTS : VARIANTS;

  const renderAction = (action) => {
    if (!action?.label) return null;

    const variant = action.variant ?? "primary";
    const size = action.size ?? "lg";

    return (
      <a
        key={action.label}
        href={action.href ?? "#"}
        className={`inline-flex items-center justify-center rounded-lg font-semibold transition-colors ${palette[variant] ?? palette.primary} ${SIZES[size] ?? SIZES.lg}`}
      >
        {action.label}
      </a>
    );
  };

  if (!primaryAction?.label && !secondaryAction?.label) return null;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${justify}`}>
      {renderAction(primaryAction)}
      {renderAction(secondaryAction)}
    </div>
  );
}
