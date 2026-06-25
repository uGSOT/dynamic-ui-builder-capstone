import { render, screen } from "@testing-library/react";
import WithSocialProof from "./WithSocialProof.jsx";

describe("WithSocialProof", () => {
  const socialProof = {
    label: "Trusted by 500+ teams",
    avatars: [
      { initials: "AB", color: "bg-brand" },
      { initials: "CD", color: "bg-navy" },
    ],
  };

  it("renders headline, actions, and social proof", () => {
    render(
      <WithSocialProof
        headline="Join the community"
        socialProof={socialProof}
        primaryAction={{ label: "Get started free", href: "#signup" }}
      />
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Join the community"
    );
    expect(
      screen.getByRole("link", { name: "Get started free" })
    ).toBeInTheDocument();
    expect(screen.getByText("Trusted by 500+ teams")).toBeInTheDocument();
    expect(screen.getByText("AB")).toBeInTheDocument();
  });

  it("renders with default props", () => {
    render(<WithSocialProof />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Loved by teams shipping at scale/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Trusted by 2,000+ teams worldwide")
    ).toBeInTheDocument();
  });
});
