import { render, screen } from "@testing-library/react";
import InlineRow from "./InlineRow.jsx";

describe("InlineRow", () => {
  it("renders a section heading and stats", () => {
    render(
      <InlineRow
        heading="Key metrics"
        stats={[
          { value: "10K+", label: "Users" },
          { value: "99.9%", label: "Uptime" },
        ]}
      />
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Key metrics");
    expect(screen.getByText("10K+")).toBeInTheDocument();
    expect(screen.getByText("Uptime")).toBeInTheDocument();
  });
});
