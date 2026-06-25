import { render, screen } from "@testing-library/react";
import TransparentHero from "./TransparentHero.jsx";

describe("TransparentHero", () => {
  it("renders with inverted logo text over hero band", () => {
    render(
      <TransparentHero
        logo={{ type: "text", text: "LaunchPad" }}
        navLinks={[{ label: "Docs", href: "#docs" }]}
        ctaButton={{ label: "Get started", href: "#signup" }}
      />
    );

    expect(screen.getByText("UI Builder")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Get started" })).toBeInTheDocument();
  });
});
