import React from "react";
import { render, screen } from "@testing-library/react";
import WithSocialProof from "./WithSocialProof.jsx";

describe("WithSocialProof", () => {
  it("renders the headline and actions", () => {
    render(<WithSocialProof />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Build the future of your company"
    );
    expect(
      screen.getByRole("link", { name: /Start building today/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Talk to product expert/i })
    ).toBeInTheDocument();
  });

  it("renders default subtext and badge when no props are passed", () => {
    render(<WithSocialProof />);

    expect(
      screen.getByText(
        "Collaborate seamlessly across engineering, product, and design to ship beautiful products that customers love."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("Trusted by top engineering organizations")
    ).toBeInTheDocument();
  });

  it("renders social proof text and avatar images", () => {
    render(<WithSocialProof />);

    expect(
      screen.getByText("Joined by 12,000+ developers this week")
    ).toBeInTheDocument();
    const imgs = screen.getAllByRole("img");
    // Default has 4 avatars, no main image
    expect(imgs.length).toBe(4);
  });

  it("renders a custom headline when passed", () => {
    render(<WithSocialProof headline="Build faster. Launch sooner." />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Build faster. Launch sooner."
    );
  });

  it("renders custom subtext when passed", () => {
    render(<WithSocialProof subtext="A faster way to ship your product." />);
    expect(
      screen.getByText("A faster way to ship your product.")
    ).toBeInTheDocument();
  });

  it("renders a custom primaryAction label and href", () => {
    render(
      <WithSocialProof
        primaryAction={{ label: "Get started", href: "/signup" }}
      />
    );
    const link = screen.getByRole("link", { name: "Get started" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/signup");
  });

  it("renders a custom secondaryAction label and href", () => {
    render(
      <WithSocialProof
        secondaryAction={{ label: "Learn more", href: "/about" }}
      />
    );
    const link = screen.getByRole("link", { name: "Learn more" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/about");
  });

  it("renders a custom badge when passed", () => {
    render(<WithSocialProof badge="14-day free trial" />);
    expect(screen.getByText("14-day free trial")).toBeInTheDocument();
  });

  it("does not render a badge when badge is explicitly empty", () => {
    render(<WithSocialProof badge="" />);
    expect(
      screen.queryByText("Trusted by top engineering organizations")
    ).not.toBeInTheDocument();
  });
});
