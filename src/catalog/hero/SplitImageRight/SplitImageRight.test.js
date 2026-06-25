import { render, screen } from "@testing-library/react";
import SplitImageRight from "./SplitImageRight.jsx";

describe("SplitImageRight", () => {
  it("renders headline, actions, and image placeholder", () => {
    render(
      <SplitImageRight
        headline="Build faster"
        primaryAction={{ label: "Get started", href: "#signup" }}
      />
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Build faster"
    );
    expect(
      screen.getByRole("link", { name: "Get started" })
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders with default props", () => {
    render(<SplitImageRight />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Build your startup site in minutes/i,
      })
    ).toBeInTheDocument();
  });
});
