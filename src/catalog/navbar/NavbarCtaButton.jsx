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
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

export default function NavbarCtaButton({ ctaButton, inverted = false }) {
  if (!ctaButton?.label) return null;

  const variant = ctaButton.variant ?? "primary";
  const size = ctaButton.size ?? "md";
  const palette = inverted ? INVERTED_VARIANTS : VARIANTS;

  return (
    <a
      href={ctaButton.href ?? "#"}
      className={`inline-flex shrink-0 items-center justify-center rounded-lg font-semibold transition-colors ${palette[variant] ?? palette.primary} ${SIZES[size] ?? SIZES.md}`}
    >
      {ctaButton.label}
    </a>
  );
}
