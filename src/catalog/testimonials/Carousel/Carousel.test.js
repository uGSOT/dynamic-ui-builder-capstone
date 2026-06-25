import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel, { defaultProps } from "./Carousel";

describe("Carousel", () => {
  test("renders heading", () => {
    render(<Carousel />);

    expect(
      screen.getByRole("heading", {
        name: defaultProps.heading,
      })
    ).toBeInTheDocument();
  });

  test("renders eyebrow", () => {
    render(<Carousel />);

    expect(screen.getByText(defaultProps.eyebrow)).toBeInTheDocument();
  });

  test("renders subheading", () => {
    render(<Carousel />);

    expect(
      screen.getByText(defaultProps.subheading)
    ).toBeInTheDocument();
  });

  test("renders visible testimonials", () => {
    render(<Carousel />);

    expect(
      screen.getByText(defaultProps.testimonials[0].quote)
    ).toBeInTheDocument();

    expect(
      screen.getByText(defaultProps.testimonials[1].quote)
    ).toBeInTheDocument();

    expect(
      screen.getByText(defaultProps.testimonials[2].quote)
    ).toBeInTheDocument();
  });

  test("renders avatar images", () => {
    render(<Carousel />);

    expect(
      screen.getByRole("img", {
        name: defaultProps.testimonials[0].name,
      })
    ).toBeInTheDocument();
  });

  test("renders company logos", () => {
    render(<Carousel />);

    expect(
      screen.getByRole("img", {
        name: defaultProps.testimonials[0].company,
      })
    ).toBeInTheDocument();
  });

  test("renders h3 heading", () => {
    render(
      <Carousel
        styles={{
          headingTag: "h3",
        }}
      />
    );

    expect(
      screen.getByRole("heading", {
        level: 3,
      })
    ).toBeInTheDocument();
  });

  test("does not render eyebrow when null", () => {
    render(<Carousel eyebrow={null} />);

    expect(
      screen.queryByText(defaultProps.eyebrow)
    ).not.toBeInTheDocument();
  });

  test("does not render subheading when null", () => {
    render(<Carousel subheading={null} />);

    expect(
      screen.queryByText(defaultProps.subheading)
    ).not.toBeInTheDocument();
  });

  test("renders custom heading", () => {
    render(<Carousel heading="Customer Reviews" />);

    expect(
      screen.getByRole("heading", {
        name: "Customer Reviews",
      })
    ).toBeInTheDocument();
  });

  test("applies heading color", () => {
    render(<Carousel headingColor="#ff0000" />);

    expect(screen.getByRole("heading")).toHaveStyle({
      color: "#ff0000",
    });
  });

  test("next button changes visible testimonial", () => {
    render(<Carousel />);

    fireEvent.click(screen.getByRole("button", { name: "›" }));

    expect(
      screen.getByText(defaultProps.testimonials[1].quote)
    ).toBeInTheDocument();
  });

  test("previous button changes visible testimonial", () => {
    render(<Carousel />);

    fireEvent.click(screen.getByRole("button", { name: "‹" }));

    expect(
      screen.getByText(defaultProps.testimonials[3].quote)
    ).toBeInTheDocument();
  });

  test("clicking indicator dot changes slide", () => {
    render(<Carousel />);

    const dots = screen.getAllByRole("button");

    fireEvent.click(dots[3]);

    expect(
      screen.getByText(defaultProps.testimonials[2].quote)
    ).toBeInTheDocument();
  });

  test("renders custom testimonials", () => {
    const testimonials = [
      {
        quote: "Amazing Product",
        name: "John",
        role: "Developer",
        avatar: "/john.jpg",
        company: "Acme",
        companyLogo: "/logo.svg",
      },
    ];

    render(<Carousel testimonials={testimonials} />);

    expect(screen.getByText("Amazing Product")).toBeInTheDocument();
  });

  test("renders only two cards when visibleCards is 2", () => {
    const { container } = render(
      <Carousel
        styles={{
          visibleCards: 2,
        }}
      />
    );

    const cards = container.querySelectorAll(
      ".border.p-6.flex.flex-col.gap-4"
    );

    expect(cards.length).toBe(2);
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Carousel />);

    expect(asFragment()).toMatchSnapshot();
  });
});