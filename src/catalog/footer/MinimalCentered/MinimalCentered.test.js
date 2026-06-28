import { render, screen } from "@testing-library/react";
import MinimalCentered from "./MinimalCentered.jsx";

describe("MinimalCentered", () => {
  const customLogo = { type: "text", text: "Acme Mock", icon: "Triangle" };
  const customCopyright = "© 2026 Acme Mock. All rights reserved.";

  it("renders brand logo, centered links, and copyright text correctly", () => {
    const customLinks = [
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ];

    render(
      <MinimalCentered
        logo={customLogo}
        links={customLinks}
        copyright={customCopyright}
      />
    );

    expect(screen.getByText("Acme Mock")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute("href", "/blog");
    expect(screen.getByRole("link", { name: "Careers" })).toHaveAttribute("href", "/careers");
    expect(screen.getByText("© 2026 Acme Mock. All rights reserved.")).toBeInTheDocument();
  });
});
