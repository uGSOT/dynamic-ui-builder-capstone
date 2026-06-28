import { render, screen } from "@testing-library/react";
import FullWidthCentered from "./FullWidthCentered.jsx";

describe("FullWidthCentered", () => {
  const baseProps = {
    heading: "Ready to scale your UI creation workflow?",
    subheading: "Join over 2,000 teams building faster layout configurations.",
    primaryAction: { label: "Get started for free", href: "/signup" },
    secondaryAction: { label: "Schedule a demo", href: "/demo" },
  };

  it("renders heading and subheading", () => {
    render(<FullWidthCentered {...baseProps} />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Ready to scale your UI creation workflow?"
    );
    expect(
      screen.getByText("Join over 2,000 teams building faster layout configurations.")
    ).toBeInTheDocument();
  });

  it("renders primary and secondary action links", () => {
    render(<FullWidthCentered {...baseProps} />);

    const primaryLink = screen.getByRole("link", { name: "Get started for free" });
    const secondaryLink = screen.getByRole("link", { name: "Schedule a demo" });

    expect(primaryLink).toBeInTheDocument();
    expect(primaryLink).toHaveAttribute("href", "/signup");

    expect(secondaryLink).toBeInTheDocument();
    expect(secondaryLink).toHaveAttribute("href", "/demo");
  });

  it("does not render subheading when passed an empty string", () => {
    render(<FullWidthCentered {...baseProps} subheading="" />);

    expect(
      screen.queryByText("Join over 2,000 teams building faster layout configurations.")
    ).not.toBeInTheDocument();
  });

  it("does not render heading when passed an empty string", () => {
    render(<FullWidthCentered {...baseProps} heading="" />);

    expect(screen.queryByRole("heading", { level: 2 })).not.toBeInTheDocument();
  });

  it("does not render the button group when both actions are omitted", () => {
    render(
      <FullWidthCentered
        heading="Standalone heading"
        primaryAction={undefined}
        secondaryAction={undefined}
      />
    );

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders only the primary button when secondaryAction has no label", () => {
    render(
      <FullWidthCentered
        {...baseProps}
        secondaryAction={{ label: "", href: "#" }}
      />
    );

    expect(screen.getByRole("link", { name: "Get started for free" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Schedule a demo" })).not.toBeInTheDocument();
  });

  it("renders only the secondary button when primaryAction has no label", () => {
    render(
      <FullWidthCentered
        {...baseProps}
        primaryAction={{ label: "", href: "#" }}
      />
    );

    expect(screen.getByRole("link", { name: "Schedule a demo" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Get started for free" })).not.toBeInTheDocument();
  });

  it("renders with default props without crashing", () => {
    render(<FullWidthCentered />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Ready to scale/i })
    ).toBeInTheDocument();
  });
});