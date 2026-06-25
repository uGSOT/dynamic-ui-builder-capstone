import { render, screen, fireEvent } from "@testing-library/react";
import ClassicSticky from "./ClassicSticky.jsx";

describe("ClassicSticky", () => {
  const navLinks = [
    { label: "Product", href: "#product" },
    { label: "Pricing", href: "#pricing" },
  ];

  it("renders logo, links, and CTA", () => {
    render(
      <ClassicSticky
        logo={{ type: "text", text: "Acme" }}
        navLinks={navLinks}
        ctaButton={{ label: "Sign up", href: "#signup" }}
      />
    );

    expect(screen.getByText("Acme")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Product" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Sign up" })).toBeInTheDocument();
  });

  it("opens mobile menu on toggle", () => {
    render(
      <ClassicSticky
        logo={{ type: "text", text: "Acme" }}
        navLinks={navLinks}
        ctaButton={{ label: "Sign up", href: "#signup" }}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByRole("button", { name: "Close menu" })).toBeInTheDocument();
  });
});
