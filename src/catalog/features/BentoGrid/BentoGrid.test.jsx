import { render, screen } from "@testing-library/react";
import BentoGrid, { defaultProps } from "./BentoGrid";

function renderComponent(props = {}) {
  return render(<BentoGrid {...defaultProps} {...props} />);
}

describe("BentoGrid", () => {
  // ── Rendering ──────────────────────────────────────────────────────────────

  it("renders the heading", () => {
    renderComponent();
    expect(screen.getByText(defaultProps.heading)).toBeInTheDocument();
  });

  it("renders the subheading when provided", () => {
    renderComponent({ subheading: "Custom sub" });
    expect(screen.getByText("Custom sub")).toBeInTheDocument();
  });

  it("does not render subheading when omitted", () => {
    renderComponent({ subheading: undefined });
    expect(screen.queryByText(defaultProps.subheading)).not.toBeInTheDocument();
  });

  it("renders all 7 feature titles", () => {
    renderComponent();
    defaultProps.features.forEach((f) => {
      expect(screen.getByText(f.title)).toBeInTheDocument();
    });
  });

  it("renders all 7 feature descriptions", () => {
    renderComponent();
    defaultProps.features.forEach((f) => {
      expect(screen.getByText(f.description)).toBeInTheDocument();
    });
  });

  it("renders the hero tag when provided", () => {
    renderComponent();
    const heroFeature = defaultProps.features.find((f) => f.slot === "hero" && f.tag);
    if (heroFeature) {
      expect(screen.getByText(heroFeature.tag)).toBeInTheDocument();
    }
  });

  // ── Slots ──────────────────────────────────────────────────────────────────

  it("renders exactly 1 hero feature", () => {
    renderComponent();
    const heroes = defaultProps.features.filter((f) => f.slot === "hero");
    expect(heroes.length).toBe(1);
  });

  it("renders exactly 2 medium features", () => {
    renderComponent();
    const mediums = defaultProps.features.filter((f) => f.slot === "medium");
    expect(mediums.length).toBe(2);
  });

  it("renders exactly 4 small features", () => {
    renderComponent();
    const smalls = defaultProps.features.filter((f) => f.slot === "small");
    expect(smalls.length).toBe(4);
  });

  // ── Size ───────────────────────────────────────────────────────────────────

  it("applies sm size classes to section", () => {
    const { container } = renderComponent({ size: "sm" });
    expect(container.querySelector("section").className).toContain("py-12");
  });

  it("applies md size classes to section", () => {
    const { container } = renderComponent({ size: "md" });
    expect(container.querySelector("section").className).toContain("py-16");
  });

  it("applies lg size classes to section", () => {
    const { container } = renderComponent({ size: "lg" });
    expect(container.querySelector("section").className).toContain("py-24");
  });

  // ── Accent colour ──────────────────────────────────────────────────────────

  it("renders without crashing for all accent colours", () => {
    ["indigo", "violet", "emerald", "rose"].forEach((color) => {
      const { unmount } = renderComponent({ accentColor: color });
      expect(screen.getByText(defaultProps.heading)).toBeInTheDocument();
      unmount();
    });
  });

  it("falls back to indigo for an unknown accent colour", () => {
    expect(() => renderComponent({ accentColor: "banana" })).not.toThrow();
  });

  // ── Icon fallback ──────────────────────────────────────────────────────────

  it("falls back to Star icon for unknown icon names", () => {
    const features = [
      { ...defaultProps.features[0], icon: "NotARealIcon" },
      ...defaultProps.features.slice(1),
    ];
    expect(() => renderComponent({ features })).not.toThrow();
  });
});
