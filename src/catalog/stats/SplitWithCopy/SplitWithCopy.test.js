import { render, screen } from "@testing-library/react";
import SplitWithCopy from "./SplitWithCopy.jsx";

describe("SplitWithCopy", () => {
  it("renders heading, body, and stats", () => {
    render(
      <SplitWithCopy
        heading="Performance you can trust"
        body="Metrics that show reliability, user satisfaction, and growth."
        stats={[
          { value: "10K+", label: "Users" },
          { value: "99.9%", label: "Uptime" },
        ]}
      />
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Performance you can trust");
    expect(screen.getByText("Metrics that show reliability, user satisfaction, and growth.")).toBeInTheDocument();
    expect(screen.getByText("99.9%")).toBeInTheDocument();
  });
});
