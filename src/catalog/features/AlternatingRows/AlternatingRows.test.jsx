import { render, screen } from "@testing-library/react";
import AlternatingRows, { defaultProps } from "./AlternatingRows";

function renderComponent(props = {}) {
  return render(<AlternatingRows {...defaultProps} {...props} />);
}

describe("AlternatingRows", () => {
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

  it("renders feature tags when provided", () => {
    renderComponent();
    defaultProps.features.forEach((f) => {
      if (f.tag) expect(screen.getByText(f.tag)).toBeInTheDocument();
    });
  });

  it("renders bullet points when provided", () => {
    renderComponent();
    defaultProps.features.forEach((f) => {
      if (f.bullets) {
        f.bullets.forEach((b) => {
          expect(screen.getByText(b)).toBeInTheDocument();
        });
      }
    });
  });

  // ── Image fallback ─────────────────────────────────────────────────────────

  it("renders fallback illustration when image is null and showImageFallback is true", () => {
    const { container } = renderComponent({ showImageFallback: true });
    const fallbacks = container.querySelectorAll(".bg-gradient-to-br");
    expect(fallbacks.length).toBe(defaultProps.features.length);
  });

  it("does not render fallback when showImageFallback is false and image is null", () => {
    const { container } = renderComponent({ showImageFallback: false });
    const fallbacks = container.querySelectorAll(".bg-gradient-to-br");
    expect(fallbacks.length).toBe(0);
  });

  it("renders a real img tag when image URL is provided", () => {
    const features = [
      { ...defaultProps.features[0], image: "https://example.com/img.png" },
    ];
    renderComponent({ features });
    expect(screen.getByRole("img")).toHaveAttribute("src", "https://example.com/img.png");
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

  // ── Image position ─────────────────────────────────────────────────────────

  it("applies lg:flex-row for right-first on first row", () => {
    const { container } = renderComponent({ imagePosition: "right-first" });
    const rows = container.querySelectorAll(".lg\\:flex-row:not(.lg\\:flex-row-reverse)");
    expect(rows.length).toBeGreaterThan(0);
  });

  it("applies lg:flex-row-reverse for left-first on first row", () => {
    const { container } = renderComponent({ imagePosition: "left-first" });
    const rows = container.querySelectorAll(".lg\\:flex-row-reverse");
    expect(rows.length).toBeGreaterThan(0);
  });
});
