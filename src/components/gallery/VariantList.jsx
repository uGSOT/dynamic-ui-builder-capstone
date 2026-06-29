export default function VariantList({
  variants,
  selectedVariant,
  onSelectVariant,
}) {
  return (
    <div className="border-b border-border bg-muted/50 px-4 py-4 sm:px-6">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-ink-subtle">
        Variants
      </h3>
      <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
        {Object.values(variants).map((variant) => {
          const isSelected = selectedVariant === variant.id;
          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => onSelectVariant(variant.id)}
              className={`rounded-lg border px-3 py-2.5 text-left transition-all ${
                isSelected
                  ? "border-primary bg-brand-muted shadow-sm"
                  : "border-border bg-surface hover:border-primary/40 hover:shadow-card"
              }`}
            >
              <span
                className={`block text-sm font-semibold ${isSelected ? "text-primary" : "text-text"}`}
              >
                {variant.name}
              </span>
              <span className="mt-0.5 block text-xs leading-snug text-ink-muted">
                {variant.description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
