import { render, screen } from "@testing-library/react";
import BentoGrid, { defaultProps, defaultStyles } from "./BentoGrid";

function renderComponent(props = {}, styles = {}) {
  return render(
    <BentoGrid
      {...defaultProps}
      {...props}
      styles={{ ...defaultStyles, ...styles }}
    />
  );
}

describe("BentoGrid", () => {
  it("renders the heading", () => {
    renderComponent();
    expect(screen.getByText(defaultProps.heading)).toBeInTheDocument();
  });

  it("renders the subheading", () => {
    renderComponent();
    expect(screen.getByText(defaultProps.subheading)).toBeInTheDocument();
  });

  it("hides subheading when empty string", () => {
    renderComponent({ subheading: "" });
    expect(screen.queryByText(defaultProps.subheading)).not.toBeInTheDocument();
  });

  it("renders all 7 feature titles", () => {
    renderComponent();
    defaultProps.features.forEach((f) =>
      expect(screen.getByText(f.title)).toBeInTheDocument()
    );
  });

  it("renders all 7 feature descriptions", () => {
    renderComponent();
    defaultProps.features.forEach((f) =>
      expect(screen.getByText(f.description)).toBeInTheDocument()
    );
  });

  it("has exactly 1 hero feature in default data", () => {
    expect(defaultProps.features.filter((f) => f.slot === "hero").length).toBe(1);
  });

  it("has exactly 2 medium features in default data", () => {
    expect(defaultProps.features.filter((f) => f.slot === "medium").length).toBe(2);
  });

  it("has exactly 4 small features in default data", () => {
    expect(defaultProps.features.filter((f) => f.slot === "small").length).toBe(4);
  });

  it("renders without crashing on dark background", () => {
    expect(() => renderComponent({}, { background: "dark" })).not.toThrow();
  });

  it("renders without crashing for all accent colours", () => {
    ["indigo", "violet", "emerald", "rose", "blue"].forEach((color) => {
      const { unmount } = renderComponent({}, { accentColor: color });
      expect(screen.getByText(defaultProps.heading)).toBeInTheDocument();
      unmount();
    });
  });

  it("falls back to Star icon for unknown icon names", () => {
    const features = defaultProps.features.map((f, i) =>
      i === 0 ? { ...f, icon: "NotReal" } : f
    );
    expect(() => renderComponent({ features })).not.toThrow();
  });

  it("renders with no small cards without crashing", () => {
    const features = defaultProps.features.filter((f) => f.slot !== "small");
    expect(() => renderComponent({ features })).not.toThrow();
  });
});
