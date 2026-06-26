import { render, screen } from "@testing-library/react";
import StatCards from "./StatCards.jsx";

describe("StatCards", () => {
  it("renders cards with stats and heading", () => {
    render(
      <StatCards
        heading="Momentum"
        stats={[
          { value: "10K+", label: "Users" },
          { value: "99.9%", label: "Uptime" },
        ]}
      />
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Momentum");
    expect(screen.getByText("10K+")).toBeInTheDocument();
    expect(screen.getByText("Uptime")).toBeInTheDocument();
  });
});
