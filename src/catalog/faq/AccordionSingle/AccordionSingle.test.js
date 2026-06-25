import { render, screen, fireEvent } from "@testing-library/react";
import AccordionSingle from "./AccordionSingle.jsx";

describe("AccordionSingle", () => {
  const items = [
    { question: "What is included?", answer: "All core features are included." },
    { question: "Can I cancel?", answer: "Yes, cancel anytime from settings." },
  ];

  it("renders heading and first answer by default", () => {
    render(
      <AccordionSingle
        heading="FAQ"
        subheading="Common questions"
        items={items}
        defaultOpenIndex={0}
      />
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("FAQ");
    expect(screen.getByText("Common questions")).toBeInTheDocument();
    expect(screen.getByText("All core features are included.")).toBeInTheDocument();
  });

  it("toggles accordion items on click", () => {
    render(<AccordionSingle items={items} defaultOpenIndex={0} />);

    fireEvent.click(screen.getByRole("button", { name: "Can I cancel?" }));
    expect(screen.getByText("Yes, cancel anytime from settings.")).toBeInTheDocument();
  });

  it("renders all questions", () => {
    render(<AccordionSingle items={items} defaultOpenIndex={-1} />);

    expect(screen.getByRole("button", { name: "What is included?" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Can I cancel?" })).toBeInTheDocument();
  });
});
