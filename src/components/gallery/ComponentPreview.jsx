import { Eye } from "lucide-react";
import { getVariantEntry } from "../../catalog/registry";

export default function ComponentPreview({ sectionConfig }) {
  const variantEntry = getVariantEntry(
    sectionConfig.type,
    sectionConfig.variant
  );

  if (!variantEntry) {
    return (
      <div className="flex min-h-[200px] items-center justify-center bg-surface-muted p-8 text-center text-sm text-ink-muted">
        Select a valid component variant to preview
      </div>
    );
  }

  const PreviewComponent = variantEntry.component;

  return (
    <section className="border-b border-border">
      <div className="flex flex-wrap items-center gap-2 border-b border-border bg-surface px-4 py-2.5 sm:px-6">
        <Eye size={15} className="shrink-0 text-brand" />
        <h3 className="text-sm font-semibold text-ink">Live Preview</h3>
        <span className="rounded bg-surface-muted px-2 py-0.5 text-xs font-medium text-ink-muted">
          {sectionConfig.type} / {sectionConfig.variant}
        </span>
      </div>

      <div className="bg-surface-subtle py-2">
        <div className="mx-auto w-full max-w-5xl">
          <PreviewComponent
            key={`${sectionConfig.variant}-${sectionConfig.id}`}
            {...(sectionConfig.props ?? {})}
            styles={sectionConfig.styles ?? {}}
          />
        </div>
      </div>
    </section>
  );
}
