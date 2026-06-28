import SectionRenderer from "./SectionRenderer";

const FONT_FAMILIES = {
  inter: '"Inter", ui-sans-serif, system-ui, sans-serif',
  "plus-jakarta-sans": '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif',
  "dm-sans": '"DM Sans", ui-sans-serif, system-ui, sans-serif',
  "space-grotesk": '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
};

function isLightHero(section) {
  const background = section?.styles?.background;
  return background === "surface" || background === "muted";
}

function renderSectionGroup(sections, viewport, startIndex) {
  const section = sections[startIndex];
  const next = sections[startIndex + 1];

  if (
    section.type === "navbar" &&
    section.variant === "transparent-hero" &&
    next?.type === "hero"
  ) {
    return {
      node: (
        <div key={`${section.id}-hero-group`} className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 z-50">
            <SectionRenderer
              section={section}
              viewport={viewport}
              overlay
              navbarProps={{
                heroTone: next.styles?.background === "navy" ? "dark" : isLightHero(next) ? "light" : "dark",
              }}
            />
          </div>
          <SectionRenderer section={next} viewport={viewport} />
        </div>
      ),
      consumed: 2,
    };
  }

  return {
    node: (
      <SectionRenderer
        key={section.id ?? `${section.type}-${startIndex}`}
        section={section}
        viewport={viewport}
      />
    ),
    consumed: 1,
  };
}

function buildThemeStyle(theme) {
  const style = {
    fontFamily:
      FONT_FAMILIES[theme?.typography?.fontFamily] ?? FONT_FAMILIES["plus-jakarta-sans"],
  };

  const colors = theme?.colors;
  if (colors?.primary) style["--site-primary"] = colors.primary;
  if (colors?.secondary) style["--site-secondary"] = colors.secondary;
  if (colors?.accent) style["--site-accent"] = colors.accent;
  if (colors?.background) style["--site-background"] = colors.background;
  if (colors?.surface) style["--site-surface"] = colors.surface;
  if (colors?.text) style["--site-text"] = colors.text;
  if (colors?.muted) style["--site-muted"] = colors.muted;

  return style;
}

export default function SiteRenderer({ siteConfig, viewport = "desktop" }) {
  if (!siteConfig?.pages?.length) {
    return (
      <div className="flex min-h-[320px] items-center justify-center p-8 text-center text-sm text-ink-muted">
        Add a valid pages array to preview your site
      </div>
    );
  }

  const page = siteConfig.pages[0];
  const sections = page.sections ?? [];

  if (sections.length === 0) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center gap-2 p-8 text-center text-sm text-ink-muted">
        <p className="font-medium text-ink">No sections yet</p>
        <p className="max-w-sm text-xs">
          Paste section JSON from the Gallery into pages[0].sections[] to build
          your page.
        </p>
      </div>
    );
  }

  const themeStyle = buildThemeStyle(siteConfig.theme);

  const nodes = [];
  let index = 0;

  while (index < sections.length) {
    const { node, consumed } = renderSectionGroup(sections, viewport, index);
    nodes.push(node);
    index += consumed;
  }

  return (
    <div className="min-h-full w-full overflow-x-hidden bg-surface" style={themeStyle}>
      {siteConfig.meta?.title && (
        <div className="sr-only">{siteConfig.meta.title}</div>
      )}
      {nodes}
    </div>
  );
}
