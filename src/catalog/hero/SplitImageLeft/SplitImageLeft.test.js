import React from "react";
import { render, screen } from "@testing-library/react";
import SplitImageLeft from "./SplitImageLeft.jsx";

describe("SplitImageLeft", () => {
  it("renders the headline and actions", () => {
    render(<SplitImageLeft />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "The operating system for modern business"
    );
    expect(
      screen.getByRole("link", { name: /Get started free/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Watch interactive demo/i })
    ).toBeInTheDocument();
  });

  it("renders default subtext and badge when no props are passed", () => {
    render(<SplitImageLeft />);

    expect(
      screen.getByText(
        "Connect your tools, automate your workflows, and scale your growth with a single declarative platform designed for fast-moving teams."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("New: Version 2.0 is now live")).toBeInTheDocument();
  });

  it("does not render an image when imageUrl is set to empty", () => {
    render(<SplitImageLeft imageUrl="" />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("renders a custom headline when passed", () => {
    render(<SplitImageLeft headline="Build faster. Launch sooner." />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Build faster. Launch sooner."
    );
  });

  it("renders custom subtext when passed", () => {
    render(<SplitImageLeft subtext="A faster way to ship your product." />);
    expect(
      screen.getByText("A faster way to ship your product.")
    ).toBeInTheDocument();
  });

  it("renders a custom primaryAction label and href", () => {
    render(
      <SplitImageLeft
        primaryAction={{ label: "Get started", href: "/signup" }}
      />
    );
    const link = screen.getByRole("link", { name: "Get started" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/signup");
  });

  it("renders a custom secondaryAction label and href", () => {
    render(
      <SplitImageLeft
        secondaryAction={{ label: "Learn more", href: "/about" }}
      />
    );
    const link = screen.getByRole("link", { name: "Learn more" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/about");
  });

  it("renders an image when imageUrl is passed", () => {
    render(<SplitImageLeft imageUrl="/assets/screenshot.png" />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/assets/screenshot.png");
  });

  it("renders a custom badge when passed", () => {
    render(<SplitImageLeft badge="14-day free trial" />);
    expect(screen.getByText("14-day free trial")).toBeInTheDocument();
  });

  it("does not render a badge when badge is explicitly empty", () => {
    render(<SplitImageLeft badge="" />);
    expect(
      screen.queryByText("New: Version 2.0 is now live")
    ).not.toBeInTheDocument();
  });
});
