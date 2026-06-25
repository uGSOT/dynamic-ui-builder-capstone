import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeaturedSingle, { defaultProps } from "./FeaturedSingle";

describe("FeaturedSingle", () => {
  test("renders default quote", () => {
    render(<FeaturedSingle />);

    expect(
      screen.getByText(`"${defaultProps.quote}"`)
    ).toBeInTheDocument();
  });

  test("renders author name", () => {
    render(<FeaturedSingle />);

    expect(
      screen.getByText(defaultProps.name)
    ).toBeInTheDocument();
  });

  test("renders author role", () => {
    render(<FeaturedSingle />);

    expect(
      screen.getByText(defaultProps.role)
    ).toBeInTheDocument();
  });

  test("renders avatar image", () => {
    render(<FeaturedSingle />);

    expect(
      screen.getByRole("img", {
        name: defaultProps.name,
      })
    ).toBeInTheDocument();
  });

  test("renders company logo", () => {
    render(<FeaturedSingle />);

    expect(
      screen.getByRole("img", {
        name: defaultProps.company,
      })
    ).toBeInTheDocument();
  });

  test("does not render company logo when companyLogo is null", () => {
    render(<FeaturedSingle companyLogo={null} />);

    expect(
      screen.queryByRole("img", {
        name: defaultProps.company,
      })
    ).not.toBeInTheDocument();
  });

  test("renders custom quote", () => {
    render(<FeaturedSingle quote="Amazing Product!" />);

    expect(
      screen.getByText('"Amazing Product!"')
    ).toBeInTheDocument();
  });

  test("renders custom author", () => {
    render(
      <FeaturedSingle
        name="John Doe"
        role="Frontend Engineer"
      />
    );

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(
      screen.getByText("Frontend Engineer")
    ).toBeInTheDocument();
  });

  test("applies quote color", () => {
    render(<FeaturedSingle quoteColor="#ff0000" />);

    expect(
      screen.getByText(`"${defaultProps.quote}"`)
    ).toHaveStyle({
      color: "#ff0000",
    });
  });

  test("applies name color", () => {
    render(<FeaturedSingle nameColor="#00ff00" />);

    expect(
      screen.getByText(defaultProps.name)
    ).toHaveStyle({
      color: "#00ff00",
    });
  });

  test("applies role color", () => {
    render(<FeaturedSingle roleColor="#0000ff" />);

    expect(
      screen.getByText(defaultProps.role)
    ).toHaveStyle({
      color: "#0000ff",
    });
  });

  test("applies accent color to decorative quote", () => {
    render(<FeaturedSingle accentColor="#123456" />);

    const quotes = screen.getAllByText('"');

    expect(quotes[0]).toHaveStyle({
      color: "#123456",
    });
  });

  test("renders left alignment", () => {
    const { container } = render(
      <FeaturedSingle
        styles={{
          align: "left",
        }}
      />
    );

    expect(
      container.querySelector(".text-left")
    ).toBeInTheDocument();
  });

  test("renders center alignment by default", () => {
    const { container } = render(<FeaturedSingle />);

    expect(
      container.querySelector(".text-center")
    ).toBeInTheDocument();
  });

  test("renders max width xl", () => {
    const { container } = render(
      <FeaturedSingle
        styles={{
          maxWidth: "xl",
        }}
      />
    );

    expect(
      container.querySelector(".max-w-4xl")
    ).toBeInTheDocument();
  });

  test("renders large avatar", () => {
    const { container } = render(
      <FeaturedSingle
        styles={{
          avatarSize: "lg",
        }}
      />
    );

    expect(
      container.querySelector(".w-20.h-20")
    ).toBeInTheDocument();
  });

  test("renders large logo", () => {
    const { container } = render(
      <FeaturedSingle
        styles={{
          logoHeight: "lg",
        }}
      />
    );

    expect(
      container.querySelector(".h-8")
    ).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<FeaturedSingle />);

    expect(asFragment()).toMatchSnapshot();
  });
});