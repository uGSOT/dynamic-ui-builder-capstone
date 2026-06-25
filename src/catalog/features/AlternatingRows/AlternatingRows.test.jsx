import { render, screen } from "@testing-library/react";
import AlternatingRows, { defaultProps, defaultStyles } from "./AlternatingRows";

function renderComponent(props = {}, styles = {}) {
  return render(
    <AlternatingRows
      {...defaultProps}
      {...props}
      styles={{ ...defaultStyles, ...styles }}
    />
  );
}

describe("AlternatingRows", () => {
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

  it("shows tags when showTags is true", () => {
    renderComponent({ showTags: true });
    defaultProps.features.forEach((f) => {
      if (f.tag) expect(screen.getByText(f.tag)).toBeInTheDocument();
    });
  });

  it("hides tags when showTags is false", () => {
    renderComponent({ showTags: false });
    defaultProps.features.forEach((f) => {
      if (f.tag) expect(screen.queryByText(f.tag)).not.toBeInTheDocument();
    });
  });

  it("shows bullets when showBullets is true", () => {
    renderComponent({ showBullets: true });
    const firstFeatureWithBullets = defaultProps.features.find(
      (f) => f.bullets && f.bullets.length > 0
    );
    if (firstFeatureWithBullets) {
      expect(
        screen.getByText(firstFeatureWithBullets.bullets[0])
      ).toBeInTheDocument();
    }
  });

  it("hides bullets when showBullets is false", () => {
    renderComponent({ showBullets: false });
    const firstFeatureWithBullets = defaultProps.features.find(
      (f) => f.bullets && f.bullets.length > 0
    );
    if (firstFeatureWithBullets) {
      expect(
        screen.queryByText(firstFeatureWithBullets.bullets[0])
      ).not.toBeInTheDocument();
    }
  });

  it("renders a real img when image URL is provided", () => {
    const features = [
      { ...defaultProps.features[0], image: "https://example.com/img.png" },
      ...defaultProps.features.slice(1),
    ];
    renderComponent({ features });
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://example.com/img.png"
    );
  });

  it("renders without crashing on dark background", () => {
    expect(() => renderComponent({}, { background: "dark" })).not.toThrow();
  });
});
