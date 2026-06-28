import { BREAKPOINTS } from "./constants";

export const VIEWPORT_PRESETS = {
  mobile: {
    label: "Mobile",
    width: 390,
    height: 844,
    breakpoint: "mobile",
  },
  tablet: {
    label: "Tablet",
    width: 820,
    height: 1180,
    breakpoint: "tablet",
  },
  desktop: {
    label: "Desktop",
    width: 1280,
    height: 800,
    breakpoint: "desktop",
  },
};

export const DEFAULT_VIEWPORT = "desktop";

export function widthToBreakpoint(width) {
  if (width < BREAKPOINTS.tablet) return "mobile";
  if (width < BREAKPOINTS.desktop) return "tablet";
  return "desktop";
}

export function getPreset(presetId) {
  return VIEWPORT_PRESETS[presetId] ?? VIEWPORT_PRESETS.desktop;
}
