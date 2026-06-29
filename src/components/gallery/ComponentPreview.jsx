import { Eye } from "lucide-react";
import { getVariantEntry } from "../../catalog/registry";
import NavbarGalleryPreview from "./NavbarGalleryPreview";

export default function ComponentPreview({ sectionConfig }) {
  const variantEntry = getVariantEntry(
    sectionConfig.type,
    sectionConfig.variant
  );

  if (!variantEntry) {
    return (
      <div className="flex min-h-[200px] items-center justify-center bg-muted p-8 text-center text-sm text-ink-muted">
        Select a valid component variant to preview
      </div>
    );
  }

  const PreviewComponent = variantEntry.component;
  const componentKey = `${sectionConfig.variant}-${sectionConfig.id}`;
  const componentProps = {
    ...(sectionConfig.props ?? {}),
    styles: sectionConfig.styles ?? {},
  };

  const isNavbar = sectionConfig.type === "navbar";

  return (
    <section className="border-b border-border">
      <div className="flex flex-wrap items-center gap-2 border-b border-border bg-surface px-4 py-2.5 sm:px-6">
        <Eye size={15} className="shrink-0 text-primary" />
        <h3 className="text-sm font-semibold text-text">Live Preview</h3>
        <span className="rounded bg-muted px-2 py-0.5 text-xs font-medium text-ink-muted">
          {sectionConfig.type} / {sectionConfig.variant}
        </span>
        {isNavbar && (
          <span className="text-xs text-ink-subtle">
            click nav links to switch hero section
          </span>
        )}
      </div>

      <div className="bg-surface-subtle py-2">
        <div className={`mx-auto w-full ${isNavbar ? "" : "max-w-5xl"}`}>
          {isNavbar ? (
            <NavbarGalleryPreview
              PreviewComponent={PreviewComponent}
              componentProps={componentProps}
              variant={sectionConfig.variant}
              componentKey={componentKey}
            />
          ) : (
            <PreviewComponent key={componentKey} {...componentProps} />
          )}
        </div>
      </div>
    </section>
  );
}
