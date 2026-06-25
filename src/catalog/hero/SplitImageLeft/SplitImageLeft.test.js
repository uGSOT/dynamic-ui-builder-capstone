import { render, screen } from "@testing-library/react";
import SplitImageLeft from "./SplitImageLeft.jsx";

describe("SplitImageLeft", () => {
  it("renders headline, actions, and image placeholder", () => {
    render(
      <SplitImageLeft
        headline="Download today"
        primaryAction={{ label: "Download app", href: "#download" }}
      />
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Download today"
    );
    expect(
      screen.getByRole("link", { name: "Download app" })
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders with default props", () => {
    render(<SplitImageLeft />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /The app your team actually wants to use/i,
      })
    ).toBeInTheDocument();
  });
});
