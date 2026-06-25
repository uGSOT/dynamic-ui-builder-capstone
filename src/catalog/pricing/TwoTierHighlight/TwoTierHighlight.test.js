import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TwoTierHighlight from "./TwoTierHighlight.jsx";

describe("TwoTierHighlight", () => {
  it("renders the heading and subheading", () => {
    render(<TwoTierHighlight />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Simple, transparent pricing"
    );
    expect(
      screen.getByText(/Choose the perfect plan for your team/i)
    ).toBeInTheDocument();
  });

  it("renders both plans with correct details", () => {
    render(<TwoTierHighlight />);

    expect(screen.getByText("Standard Plan")).toBeInTheDocument();
    expect(screen.getByText("Growth Plan")).toBeInTheDocument();

    // Check prices
    expect(screen.getByText("$19")).toBeInTheDocument();
    expect(screen.getByText("$49")).toBeInTheDocument();

    // Check CTAs
    expect(
      screen.getByRole("link", { name: /Get Started/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Start Free Trial/i })
    ).toBeInTheDocument();
  });

  it("highlights the Growth plan", () => {
    render(<TwoTierHighlight />);
    expect(screen.getByText("Most Popular")).toBeInTheDocument();
  });

  it("toggles the billing period and shows discounted pricing", () => {
    render(<TwoTierHighlight />);

    const toggle = screen.getByLabelText("Toggle billing period");
    fireEvent.click(toggle);

    // $19 * 0.8 = $15
    // $49 * 0.8 = $39
    expect(screen.getByText("$15")).toBeInTheDocument();
    expect(screen.getByText("$39")).toBeInTheDocument();
  });
});
