import { render, screen, fireEvent } from "@testing-library/react";
import WithNewsletter from "./WithNewsletter.jsx";

describe("WithNewsletter", () => {
  const customLogo = { type: "text", text: "GrowthLab Mock", icon: "TrendingUp" };
  const customNewsletter = {
    title: "Subscribe to waitlist",
    description: "Submit details.",
    placeholder: "Mock email placeholder",
    buttonText: "Subscribe",
  };

  it("renders newsletter heading, input box, and brand details correctly", () => {
    render(
      <WithNewsletter
        logo={customLogo}
        newsletter={customNewsletter}
        copyright="© 2026 GrowthLab Mock"
      />
    );

    expect(screen.getByText("Subscribe to waitlist")).toBeInTheDocument();
    expect(screen.getByText("Submit details.")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Mock email placeholder")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Subscribe" })).toBeInTheDocument();
  });

  it("submits the subscription form and shows success status", () => {
    jest.useFakeTimers();
    render(<WithNewsletter newsletter={customNewsletter} />);

    const input = screen.getByPlaceholderText("Mock email placeholder");
    const button = screen.getByRole("button", { name: "Subscribe" });

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(button);

    expect(screen.getByText("Subscribed")).toBeInTheDocument();

    jest.runAllTimers();
    jest.useRealTimers();
  });
});
