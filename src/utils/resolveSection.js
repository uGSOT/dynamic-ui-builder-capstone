const VIEWPORT_CASCADE = {
  mobile: ["mobile"],
  tablet: ["mobile", "tablet"],
  desktop: ["mobile", "tablet", "desktop"],
};

export function resolveSection(section, viewport = "desktop") {
  const merged = {
    ...section,
    props: structuredClone(section.props ?? {}),
    styles: structuredClone(section.styles ?? {}),
  };

  const breakpoints = VIEWPORT_CASCADE[viewport] ?? VIEWPORT_CASCADE.desktop;

  for (const breakpoint of breakpoints) {
    const override = section.responsive?.[breakpoint];
    if (!override) continue;

    if (override.props) {
      Object.assign(merged.props, override.props);
    }
    if (override.styles) {
      Object.assign(merged.styles, override.styles);
    }
  }

  return merged;
}
