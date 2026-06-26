import { render, screen } from "@testing-library/react";
import GridSimple from "./GridSimple.jsx";

describe("GridSimple", () => {
  it("renders heading, subheading, and team members", () => {
    render(
      <GridSimple
        heading="Meet the Team"
        subheading="The people behind our success."
        members={[
          {
            name: "Jane Doe",
            role: "CEO",
            avatar: "/avatar-1.jpg",
          },
          {
            name: "John Smith",
            role: "CTO",
            avatar: "/avatar-2.jpg",
          },
        ]}
      />
    );

    expect(
      screen.getByRole("heading", { level: 2 })
    ).toHaveTextContent("Meet the Team");

    expect(
      screen.getByText("The people behind our success.")
    ).toBeInTheDocument();

    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("CEO")).toBeInTheDocument();

    expect(screen.getByText("John Smith")).toBeInTheDocument();
    expect(screen.getByText("CTO")).toBeInTheDocument();

    expect(screen.getAllByRole("img")).toHaveLength(2);
  });
});