import { render, screen } from "@testing-library/react";
import NewsletterSignup from "./NewsletterSignup.jsx";

describe("NewsletterSignup", () => {
  const baseProps = {
    heading: "Stay ahead of the curve",
    subheading: "Get curated system update insights, design token workflows, and product updates monthly.",
    buttonLabel: "Subscribe",
    placeholderText: "Enter your email address",
  };

  it("renders heading and subheading", () => {
    render(<NewsletterSignup {...baseProps} />);

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Stay ahead of the curve"
    );
    expect(
      screen.getByText("Get curated system update insights, design token workflows, and product updates monthly.")
    ).toBeInTheDocument();
  });

  it("renders the email input with the correct placeholder", () => {
    render(<NewsletterSignup {...baseProps} />);

    expect(
      screen.getByPlaceholderText("Enter your email address")
    ).toBeInTheDocument();
  });

  it("renders the subscribe button with the correct label", () => {
    render(<NewsletterSignup {...baseProps} />);

    expect(
      screen.getByRole("button", { name: "Subscribe" })
    ).toBeInTheDocument();
  });

  it("renders input and button in a disabled state", () => {
    render(<NewsletterSignup {...baseProps} />);

    expect(screen.getByPlaceholderText("Enter your email address")).toBeDisabled();
    expect(screen.getByRole("button", { name: "Subscribe" })).toBeDisabled();
  });

  it("does not render heading when passed an empty string", () => {
    render(<NewsletterSignup {...baseProps} heading="" />);

    expect(screen.queryByRole("heading", { level: 3 })).not.toBeInTheDocument();
  });

  it("does not render subheading when passed an empty string", () => {
    render(<NewsletterSignup {...baseProps} subheading="" />);

    expect(
      screen.queryByText("Get curated system update insights, design token workflows, and product updates monthly.")
    ).not.toBeInTheDocument();
  });

  it("renders a custom buttonLabel", () => {
    render(<NewsletterSignup {...baseProps} buttonLabel="Join now" />);

    expect(screen.getByRole("button", { name: "Join now" })).toBeInTheDocument();
  });

  it("renders a custom placeholderText", () => {
    render(<NewsletterSignup {...baseProps} placeholderText="Your work email" />);

    expect(screen.getByPlaceholderText("Your work email")).toBeInTheDocument();
  });

  it("renders with default props without crashing", () => {
    render(<NewsletterSignup />);
    expect(
      screen.getByRole("heading", { level: 3, name: /Stay ahead/i })
    ).toBeInTheDocument();
  });
});