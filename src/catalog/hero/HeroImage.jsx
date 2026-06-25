export default function HeroImage({ image, className = "" }) {
  const alt = image?.alt ?? "Product preview";

  if (image?.src) {
    return (
      <div
        className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-card ${className}`}
      >
        <img
          src={image.src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-card ${className}`}
      aria-label={alt}
      role="img"
    >
      <div className="border-b border-border bg-surface-muted px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-brand/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-subtle/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-subtle/40" />
        </div>
      </div>
      <div className="bg-gradient-to-br from-surface-muted to-surface p-6 sm:p-8">
        <div className="space-y-4">
          <div className="h-3 w-2/5 rounded-full bg-brand/20" />
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 h-24 rounded-lg bg-surface-subtle" />
            <div className="h-24 rounded-lg bg-brand-muted" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full rounded-full bg-surface-subtle" />
            <div className="h-2 w-4/5 rounded-full bg-surface-subtle" />
            <div className="h-2 w-3/5 rounded-full bg-surface-subtle" />
          </div>
        </div>
      </div>
    </div>
  );
}
