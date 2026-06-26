import { render, screen } from "@testing-library/react";
import GridWithBio from "./GridWithBio.jsx";

describe("GridWithBio", () => {
  it("renders heading, subheading, members, bios, and links", () => {
    render(
      <GridWithBio
        heading="Leadership Team"
        subheading="Meet the people leading our company."
        members={[
          {
            name: "Jane Doe",
            role: "CEO",
            avatar: "/avatar-1.jpg",
            bio: "Leads company strategy and vision.",
            links: [
              {
                type: "linkedin",
                url: "https://linkedin.com/in/janedoe",
              },
            ],
          },
          {
            name: "John Smith",
            role: "CTO",
            avatar: "/avatar-2.jpg",
            bio: "Heads engineering and technology.",
            links: [
              {
                type: "github",
                url: "https://github.com/johnsmith",
              },
            ],
          },
        ]}
      />
    );

    expect(
      screen.getByRole("heading", { level: 2 })
    ).toHaveTextContent("Leadership Team");

    expect(
      screen.getByText("Meet the people leading our company.")
    ).toBeInTheDocument();

    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("CEO")).toBeInTheDocument();
    expect(
      screen.getByText("Leads company strategy and vision.")
    ).toBeInTheDocument();

    expect(screen.getByText("John Smith")).toBeInTheDocument();
    expect(screen.getByText("CTO")).toBeInTheDocument();
    expect(
      screen.getByText("Heads engineering and technology.")
    ).toBeInTheDocument();

    expect(screen.getAllByRole("img")).toHaveLength(2);

    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});