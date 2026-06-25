import { render, screen } from "@testing-library/react";
import IconGrid, { defaultProps, defaultStyles } from "./IconGrid";

function renderComponent(props = {}, styles = {}) {
  return render(
    <IconGrid
      {...defaultProps}
      {...props}
      styles={{ ...defaultStyles, ...styles }}
    />
  );
}

describe("IconGrid", () => {
  it("renders the heading", () => {
    renderComponent();
    expect(screen.getByText(defaultProps.heading)).toBeInTheDocument();
  });

  it("renders the subheading when provided", () => {
    renderComponent({ subheading: "Custom sub" });
    expect(screen.getByText("Custom sub")).toBeInTheDocument();
  });

  it("hides the subheading when empty string", () => {
    renderComponent({ subheading: "" });
    expect(screen.queryByText(defaultProps.subheading)).not.toBeInTheDocument();
  });

  it("renders all feature titles", () => {
    renderComponent();
    defaultProps.features.forEach((f) =>
      expect(screen.getByText(f.title)).toBeInTheDocument()
    );
  });

  it("renders all feature descriptions", () => {
    renderComponent();
    defaultProps.features.forEach((f) =>
      expect(screen.getByText(f.description)).toBeInTheDocument()
    );
  });

  it("hides tags when showTags is false", () => {
    renderComponent({ showTags: false });
    defaultProps.features.forEach((f) => {
      if (f.tag) expect(screen.queryByText(f.tag)).not.toBeInTheDocument();
    });
  });

  it("shows tags when showTags is true", () => {
    renderComponent({ showTags: true });
    defaultProps.features.forEach((f) => {
      if (f.tag) expect(screen.getByText(f.tag)).toBeInTheDocument();
    });
  });

  it("renders a custom heading", () => {
    renderComponent({ heading: "Custom heading" });
    expect(screen.getByText("Custom heading")).toBeInTheDocument();
  });

  it("renders without crashing on dark background", () => {
    expect(() => renderComponent({}, { background: "dark" })).not.toThrow();
  });

  it("falls back to Star icon for unknown icon names", () => {
    const features = [
      { id: "x1", icon: "NotReal", title: "Test", description: "Desc", tag: null },
    ];
    expect(() => renderComponent({ features })).not.toThrow();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
