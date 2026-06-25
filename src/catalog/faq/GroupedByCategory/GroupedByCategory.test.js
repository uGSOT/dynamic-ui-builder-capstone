import { render, screen, fireEvent } from "@testing-library/react";
import GroupedByCategory from "./GroupedByCategory.jsx";

describe("GroupedByCategory", () => {
  const categories = [
    {
      name: "Product",
      items: [
        { question: "What is included?", answer: "Core features are included." },
      ],
    },
    {
      name: "Pricing",
      items: [
        { question: "Is there a free plan?", answer: "Yes, with limited usage." },
      ],
    },
  ];

  it("renders category headings and default open answer", () => {
    render(
      <GroupedByCategory
        heading="FAQ"
        categories={categories}
        defaultOpenKey="0-0"
      />
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("FAQ");
    expect(screen.getByRole("heading", { level: 3, name: "Product" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Pricing" })).toBeInTheDocument();
    expect(screen.getByText("Core features are included.")).toBeInTheDocument();
  });

  it("toggles items within categories", () => {
    render(
      <GroupedByCategory categories={categories} defaultOpenKey="" />
    );

    fireEvent.click(screen.getByRole("button", { name: "Is there a free plan?" }));
    expect(screen.getByText("Yes, with limited usage.")).toBeInTheDocument();
  });
});
