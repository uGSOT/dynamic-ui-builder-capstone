import { render, screen } from "@testing-library/react";
import IconCards from "./IconCards.jsx";

describe("IconCards", () => {
  const items = [
    { step: "01", title: "Instant preview", description: "Changes reflect in under 100ms. No deploy step, no waiting.", icon: "Zap" },
    { step: "02", title: "37 curated variants", description: "Every section type startups need — hero through footer.", icon: "Layers" },
    { step: "03", title: "JSON source of truth", description: "Declarative configs you own. Import, export, version control.", icon: "Code2" },
  ];

  it("renders heading and all feature cards", () => {
    render(
      <IconCards
        heading="Built for speed and consistency"
        items={items}
      />
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Built for speed and consistency"
    );
    expect(screen.getByText("Instant preview")).toBeInTheDocument();
    expect(screen.getByText("JSON source of truth")).toBeInTheDocument();
    expect(screen.getByText("Changes reflect in under 100ms. No deploy step, no waiting.")).toBeInTheDocument();
  });

  it("renders subheading when provided", () => {
    render(
      <IconCards
        heading="Features"
        subheading="Everything you need to ship faster."
        items={items}
      />
    );

    expect(screen.getByText("Everything you need to ship faster.")).toBeInTheDocument();
  });

  it("does not render subheading when passed an empty string", () => {
    render(
      <IconCards
        heading="Features"
        subheading=""
        items={items}
      />
    );

    expect(screen.queryByText("Every site shares the same design tokens and predictable API layout.")).not.toBeInTheDocument();
  });

  it("renders step labels for each card", () => {
    render(<IconCards items={items} />);

    expect(screen.getByText("Step 01")).toBeInTheDocument();
    expect(screen.getByText("Step 02")).toBeInTheDocument();
    expect(screen.getByText("Step 03")).toBeInTheDocument();
  });

  it("renders the correct number of card headings", () => {
    render(<IconCards items={items} />);
    const cardHeadings = screen.getAllByRole("heading", { level: 3 });
    expect(cardHeadings).toHaveLength(items.length);
  });

  it("renders with default props without crashing", () => {
    render(<IconCards />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Built for speed and consistency/i })
    ).toBeInTheDocument();
  });

  it("falls back gracefully when an item has an unknown icon name", () => {
    const itemsWithBadIcon = [
      { step: "01", title: "Fallback card", description: "Icon name does not exist.", icon: "NonExistentIcon" },
    ];
    render(<IconCards items={itemsWithBadIcon} />);
    expect(screen.getByText("Fallback card")).toBeInTheDocument();
  });
});