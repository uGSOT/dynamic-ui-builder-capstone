import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ThreeTier from "./ThreeTier.jsx";

describe("ThreeTier", () => {
  it("renders the heading and subheading", () => {
    render(<ThreeTier />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Simple, transparent pricing"
    );
    expect(
      screen.getByText(/Choose the perfect plan for your team/i)
    ).toBeInTheDocument();
  });

  it("renders all three plans with correct details", () => {
    render(<ThreeTier />);

    expect(screen.getByText("Basic Plan")).toBeInTheDocument();
    expect(screen.getByText("Pro Plan")).toBeInTheDocument();
    expect(screen.getByText("Enterprise Plan")).toBeInTheDocument();

    // Check for prices
    expect(screen.getByText("$9")).toBeInTheDocument();
    expect(screen.getByText("$29")).toBeInTheDocument();
    expect(screen.getByText("$99")).toBeInTheDocument();

    // Check for CTAs
    expect(
      screen.getByRole("link", { name: /Get Started/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Try Pro Free/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Contact Sales/i })
    ).toBeInTheDocument();
  });

  it("highlights the Pro plan", () => {
    render(<ThreeTier />);
    expect(screen.getByText("Most Popular")).toBeInTheDocument();
  });

  it("toggles the billing period and shows discounted pricing", () => {
    render(<ThreeTier />);

    // Toggle to Annual billing
    const toggle = screen.getByLabelText("Toggle billing period");
    fireEvent.click(toggle);

    // Verify annual prices show 20% discount
    // $9 * 0.8 = $7
    // $29 * 0.8 = $23
    // $99 * 0.8 = $79
    expect(screen.getByText("$7")).toBeInTheDocument();
    expect(screen.getByText("$23")).toBeInTheDocument();
    expect(screen.getByText("$79")).toBeInTheDocument();

    expect(screen.getAllByText("/mo, billed annually")[0]).toBeInTheDocument();
  });
});
