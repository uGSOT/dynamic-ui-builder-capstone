import { render, screen } from "@testing-library/react";
import StepsVertical from "./StepsVertical.jsx";

describe("StepsVertical", () => {
  const items = [
    { step: "01", title: "Explore the Gallery", description: "Browse component layout variants across section types." },
    { step: "02", title: "Copy component JSON", description: "Every tweak syncs to a live JSON data layout panel." },
    { step: "03", title: "Assemble in Builder", description: "Drop configurations into your application layout structure." },
  ];

  it("renders heading and all step rows", () => {
    render(
      <StepsVertical
        heading="Get started in three steps"
        items={items}
      />
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Get started in three steps"
    );
    expect(screen.getByText("Explore the Gallery")).toBeInTheDocument();
    expect(screen.getByText("Assemble in Builder")).toBeInTheDocument();
    expect(screen.getByText("Browse component layout variants across section types.")).toBeInTheDocument();
  });

  it("renders subheading when provided", () => {
    render(
      <StepsVertical
        heading="How it works"
        subheading="Follow these steps to get up and running."
        items={items}
      />
    );

    expect(screen.getByText("Follow these steps to get up and running.")).toBeInTheDocument();
  });

  it("does not render subheading when passed an empty string", () => {
    render(
      <StepsVertical
        heading="How it works"
        subheading=""
        items={items}
      />
    );

    expect(
      screen.queryByText("A connected workflow so you never write component JSON from scratch.")
    ).not.toBeInTheDocument();
  });

  it("renders step numbers for each row", () => {
    render(<StepsVertical items={items} />);

    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
  });

  it("renders the correct number of step headings", () => {
    render(<StepsVertical items={items} />);
    const stepHeadings = screen.getAllByRole("heading", { level: 3 });
    expect(stepHeadings).toHaveLength(items.length);
  });

  it("renders with default props without crashing", () => {
    render(<StepsVertical />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Gallery/i })
    ).toBeInTheDocument();
  });
});