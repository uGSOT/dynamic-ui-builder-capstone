import { render, screen } from "@testing-library/react";
import AccordionTwoColumn from "./AccordionTwoColumn.jsx";

describe("AccordionTwoColumn", () => {
  const items = [
    { question: "Question one?", answer: "Answer one." },
    { question: "Question two?", answer: "Answer two." },
    { question: "Question three?", answer: "Answer three." },
    { question: "Question four?", answer: "Answer four." },
  ];

  it("renders heading and splits items across columns", () => {
    render(
      <AccordionTwoColumn
        heading="Help center"
        items={items}
        defaultOpenIndex={0}
      />
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Help center"
    );
    expect(screen.getByRole("button", { name: "Question one?" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Question four?" })).toBeInTheDocument();
    expect(screen.getByText("Answer one.")).toBeInTheDocument();
  });

  it("renders with default props", () => {
    render(<AccordionTwoColumn />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Frequently asked questions/i })
    ).toBeInTheDocument();
  });
});
