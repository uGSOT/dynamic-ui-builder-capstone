import { getVariantEntry } from "../catalog/registry";
import { resolveSection } from "../utils/resolveSection";

export default function SectionRenderer({
  section,
  viewport = "desktop",
  overlay = false,
  navbarProps = {},
}) {
  const resolved = resolveSection(section, viewport);
  const variantEntry = getVariantEntry(resolved.type, resolved.variant);

  if (!variantEntry) {
    return (
      <div className="flex min-h-[120px] items-center justify-center border border-dashed border-border bg-muted p-6 text-center text-sm text-ink-muted">
        <div>
          <p className="font-medium text-text">
            Unknown section: {resolved.type} / {resolved.variant}
          </p>
          <p className="mt-1 text-xs">
            Check the type and variant against the component registry.
          </p>
        </div>
      </div>
    );
  }

  const Component = variantEntry.component;
  const componentKey = `${resolved.id ?? resolved.variant}-${viewport}`;
  const componentProps = {
    ...(resolved.props ?? {}),
    styles: resolved.styles ?? {},
    ...navbarProps,
  };

  if (overlay && resolved.type === "navbar") {
    return (
      <Component
        key={componentKey}
        {...componentProps}
        preventNavigation
      />
    );
  }

  return <Component key={componentKey} {...componentProps} />;
}
