import { render, screen } from "@testing-library/react";
import MultiColumn from "./MultiColumn.jsx";

describe("MultiColumn", () => {
  const customLogo = { type: "text", text: "Test SaaS", icon: "Layers" };
  const customTagline = "Best mock tagline.";
  const customCopyright = "© 2026 Test SaaS. All rights reserved.";

  it("renders brand logo, tagline, and copyright text correctly", () => {
    render(
      <MultiColumn
        logo={customLogo}
        tagline={customTagline}
        copyright={customCopyright}
      />
    );

    expect(screen.getByText("Test SaaS")).toBeInTheDocument();
    expect(screen.getByText("Best mock tagline.")).toBeInTheDocument();
    expect(screen.getByText("© 2026 Test SaaS. All rights reserved.")).toBeInTheDocument();
  });

  it("renders custom navigation link columns", () => {
    const customColumns = [
      {
        title: "LINK_COL_1",
        links: [{ label: "Help Link", href: "/help" }],
      },
    ];

    render(<MultiColumn columns={customColumns} />);

    expect(screen.getByRole("heading", { level: 3, name: "LINK_COL_1" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Help Link" })).toHaveAttribute("href", "/help");
  });
});
