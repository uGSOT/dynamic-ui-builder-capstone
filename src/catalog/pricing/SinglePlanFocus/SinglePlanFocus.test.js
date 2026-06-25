import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SinglePlanFocus from "./SinglePlanFocus.jsx";

describe("SinglePlanFocus", () => {
  it("renders the heading and subheading", () => {
    render(<SinglePlanFocus />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Simple, transparent pricing"
    );
    expect(
      screen.getByText(/Choose the perfect plan for your team/i)
    ).toBeInTheDocument();
  });

  it("renders the single plan with correct details", () => {
    render(<SinglePlanFocus />);

    expect(screen.getByText("Pro Professional")).toBeInTheDocument();
    expect(
      screen.getByText(
        "All-in-one professional package containing all capabilities."
      )
    ).toBeInTheDocument();

    // Check price
    expect(screen.getByText("$29")).toBeInTheDocument();

    // Check CTA
    expect(
      screen.getByRole("link", { name: /Get Access Now/i })
    ).toBeInTheDocument();

    // Check features
    expect(screen.getByText("Unlimited projects")).toBeInTheDocument();
    expect(screen.getByText("Full analytics suite")).toBeInTheDocument();
  });

  it("toggles the billing period and shows discounted pricing", () => {
    render(<SinglePlanFocus />);

    const toggle = screen.getByLabelText("Toggle billing period");
    fireEvent.click(toggle);

    // $29 * 0.8 = $23
    expect(screen.getByText("$23")).toBeInTheDocument();
  });
});
