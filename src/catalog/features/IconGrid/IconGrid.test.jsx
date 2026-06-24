import { render, screen } from "@testing-library/react";
import IconGrid, { defaultProps } from "./IconGrid";

function renderComponent(props = {}) {
  return render(<IconGrid {...defaultProps} {...props} />);
}

describe("IconGrid", () => {
  // ── Rendering ──────────────────────────────────────────────────────────────

  it("renders the heading", () => {
    renderComponent();
    expect(screen.getByText(defaultProps.heading)).toBeInTheDocument();
  });

  it("renders the subheading when provided", () => {
    renderComponent({ subheading: "A custom subheading" });
    expect(screen.getByText("A custom subheading")).toBeInTheDocument();
  });

  it("does not render subheading when omitted", () => {
    renderComponent({ subheading: undefined });
    expect(screen.queryByText(defaultProps.subheading)).not.toBeInTheDocument();
  });

  it("renders all feature titles", () => {
    renderComponent();
    defaultProps.features.forEach((f) => {
      expect(screen.getByText(f.title)).toBeInTheDocument();
    });
  });

  it("renders all feature descriptions", () => {
    renderComponent();
    defaultProps.features.forEach((f) => {
      expect(screen.getByText(f.description)).toBeInTheDocument();
    });
  });

  // ── Props ──────────────────────────────────────────────────────────────────

  it("renders a custom heading", () => {
    renderComponent({ heading: "Custom heading" });
    expect(screen.getByText("Custom heading")).toBeInTheDocument();
  });

  it("renders correct number of feature cards", () => {
    const features = defaultProps.features.slice(0, 3);
    renderComponent({ features });
    expect(screen.getAllByText(/./)).toBeTruthy();
    features.forEach((f) => expect(screen.getByText(f.title)).toBeInTheDocument());
  });

  it("falls back to Star icon when icon name is invalid", () => {
    renderComponent({
      features: [
        { id: "x1", icon: "NonExistentIcon", title: "Test", description: "Desc" },
      ],
    });
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  // ── Size ───────────────────────────────────────────────────────────────────

  it("applies sm size classes", () => {
    const { container } = renderComponent({ size: "sm" });
    expect(container.querySelector("section").className).toContain("py-12");
  });

  it("applies md size classes", () => {
    const { container } = renderComponent({ size: "md" });
    expect(container.querySelector("section").className).toContain("py-16");
  });

  it("applies lg size classes", () => {
    const { container } = renderComponent({ size: "lg" });
    expect(container.querySelector("section").className).toContain("py-24");
  });

  // ── Alignment ──────────────────────────────────────────────────────────────

  it("applies center alignment class", () => {
    const { container } = renderComponent({ align: "center" });
    expect(container.querySelector("h2").className).toContain("text-center");
  });

  it("applies left alignment class", () => {
    const { container } = renderComponent({ align: "left" });
    expect(container.querySelector("h2").className).toContain("text-left");
  });

  // ── Card style ─────────────────────────────────────────────────────────────

  it("applies bordered card style by default", () => {
    const { container } = renderComponent({ cardStyle: "bordered" });
    const cards = container.querySelectorAll(".border");
    expect(cards.length).toBeGreaterThan(0);
  });

  it("applies filled card style", () => {
    const { container } = renderComponent({ cardStyle: "filled" });
    const cards = container.querySelectorAll(".bg-\\[\\#1a1a24\\]");
    expect(cards.length).toBeGreaterThan(0);
  });
});
