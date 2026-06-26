import { render, screen } from "@testing-library/react";
import SplitWithImage from "./SplitWithImage.jsx";

describe("SplitWithImage", () => {
  const baseProps = {
    heading: "Designed for modern software teams",
    subheading: "Deploy fast with a clean interface that translates component design states instantly into code properties.",
    primaryAction: { label: "Get started", href: "/signup" },
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  };

  it("renders heading and subheading", () => {
    render(<SplitWithImage {...baseProps} />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Designed for modern software teams"
    );
    expect(
      screen.getByText("Deploy fast with a clean interface that translates component design states instantly into code properties.")
    ).toBeInTheDocument();
  });

  it("renders the primary action link with correct href", () => {
    render(<SplitWithImage {...baseProps} />);

    const link = screen.getByRole("link", { name: "Get started" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/signup");
  });

  it("renders the image when imageUrl is provided", () => {
    render(<SplitWithImage {...baseProps} />);

    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", baseProps.imageUrl);
  });

  it("does not render the image when imageUrl is omitted", () => {
    render(<SplitWithImage {...baseProps} imageUrl={undefined} />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("does not render heading when passed an empty string", () => {
    render(<SplitWithImage {...baseProps} heading="" />);

    expect(screen.queryByRole("heading", { level: 2 })).not.toBeInTheDocument();
  });

  it("does not render subheading when passed an empty string", () => {
    render(<SplitWithImage {...baseProps} subheading="" />);

    expect(
      screen.queryByText("Deploy fast with a clean interface that translates component design states instantly into code properties.")
    ).not.toBeInTheDocument();
  });

  it("does not render the CTA link when primaryAction has no label", () => {
    render(<SplitWithImage {...baseProps} primaryAction={{ label: "", href: "#" }} />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("falls back to # when primaryAction href is omitted", () => {
    render(<SplitWithImage {...baseProps} primaryAction={{ label: "Get started" }} />);

    expect(screen.getByRole("link", { name: "Get started" })).toHaveAttribute("href", "#");
  });

  it("renders with default props without crashing", () => {
    render(<SplitWithImage />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Designed for modern software teams/i })
    ).toBeInTheDocument();
  });
});