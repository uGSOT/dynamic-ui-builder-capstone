import { render, screen } from "@testing-library/react";
import CenteredLogo from "./CenteredLogo.jsx";

describe("CenteredLogo", () => {
  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Studio", href: "#studio" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "#blog" },
  ];

  it("renders centered logo and split navigation links", () => {
    render(
      <CenteredLogo
        logo={{ type: "text", text: "Studio" }}
        navLinks={navLinks}
        ctaButton={{ label: "Let's talk", href: "#contact" }}
      />
    );

    expect(screen.getByText("Studio")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Work" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Blog" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Let's talk" })).toBeInTheDocument();
  });
});
