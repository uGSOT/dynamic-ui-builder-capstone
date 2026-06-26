import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardGrid, { defaultProps } from "./CardGrid";

describe("CardGrid", () => {
  test("renders default heading", () => {
    render(<CardGrid />);

    expect(
      screen.getByRole("heading", {
        name: defaultProps.heading,
      })
    ).toBeInTheDocument();
  });

  test("renders default eyebrow", () => {
    render(<CardGrid />);

    expect(screen.getByText(defaultProps.eyebrow)).toBeInTheDocument();
  });

  test("renders default subheading", () => {
    render(<CardGrid />);

    expect(screen.getByText(defaultProps.subheading)).toBeInTheDocument();
  });

  test("renders all default testimonials", () => {
    render(<CardGrid />);

    defaultProps.testimonials.forEach((testimonial) => {
      expect(screen.getByText(testimonial.quote)).toBeInTheDocument();
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
      expect(screen.getByText(testimonial.role)).toBeInTheDocument();
    });
  });

  test("renders avatar images", () => {
    render(<CardGrid />);

    defaultProps.testimonials.forEach((testimonial) => {
      expect(
        screen.getByRole("img", {
          name: testimonial.name,
        })
      ).toBeInTheDocument();
    });
  });

  test("renders company logos", () => {
    render(<CardGrid />);

    defaultProps.testimonials.forEach((testimonial) => {
      expect(
        screen.getByRole("img", {
          name: testimonial.company,
        })
      ).toBeInTheDocument();
    });
  });

  test("renders custom heading", () => {
    render(<CardGrid heading="Customer Reviews" />);

    expect(
      screen.getByRole("heading", {
        name: "Customer Reviews",
      })
    ).toBeInTheDocument();
  });

  test("renders h3 when headingTag is h3", () => {
    render(<CardGrid styles={{ headingTag: "h3" }} />);

    expect(
      screen.getByRole("heading", {
        level: 3,
      })
    ).toBeInTheDocument();
  });

  test("does not render eyebrow when null", () => {
    render(<CardGrid eyebrow={null} />);

    expect(screen.queryByText(defaultProps.eyebrow)).not.toBeInTheDocument();
  });

  test("does not render subheading when null", () => {
    render(<CardGrid subheading={null} />);

    expect(
      screen.queryByText(defaultProps.subheading)
    ).not.toBeInTheDocument();
  });

  test("renders custom testimonials", () => {
    const testimonials = [
      {
        quote: "Amazing!",
        name: "John Doe",
        role: "Developer",
        avatar: "/john.jpg",
        company: "Acme",
        companyLogo: "/logo.svg",
      },
    ];

    render(<CardGrid testimonials={testimonials} />);

    expect(screen.getByText("Amazing!")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Developer")).toBeInTheDocument();
  });

  test("does not render company logo when companyLogo is missing", () => {
    const testimonials = [
      {
        quote: "Test Quote",
        name: "Alex",
        role: "Engineer",
        avatar: "/avatar.jpg",
      },
    ];

    render(<CardGrid testimonials={testimonials} />);

    expect(screen.getByRole("img", { name: "Alex" })).toBeInTheDocument();
    expect(screen.queryByAltText(/undefined/i)).not.toBeInTheDocument();
  });

  test("applies heading color style", () => {
    render(<CardGrid headingColor="#ff0000" />);

    const heading = screen.getByRole("heading");

    expect(heading).toHaveStyle({
      color: "#ff0000",
    });
  });

  test("applies quote color", () => {
    render(<CardGrid quoteColor="#008000" />);

    expect(
      screen.getByText(defaultProps.testimonials[0].quote)
    ).toHaveStyle({
      color: "#008000",
    });
  });

  test("applies accent color to quotation mark", () => {
    render(<CardGrid accentColor="#123456" />);

    const quotes = screen.getAllByText('"');

    expect(quotes[0]).toHaveStyle({
      color: "#123456",
    });
  });

  test("renders correct number of cards", () => {
    const { container } = render(<CardGrid />);

    const cards = container.querySelectorAll(
      ".border.p-6.flex.flex-col.gap-4"
    );

    expect(cards).toHaveLength(defaultProps.testimonials.length);
  });

  test("renders left aligned heading", () => {
    const { container } = render(
      <CardGrid styles={{ headingAlign: "left" }} />
    );

    expect(container.querySelector(".text-left")).toBeInTheDocument();
  });

  test("renders center aligned heading by default", () => {
    const { container } = render(<CardGrid />);

    expect(container.querySelector(".text-center")).toBeInTheDocument();
  });

  test("renders correct grid columns", () => {
    const { container } = render(
      <CardGrid styles={{ columns: 4 }} />
    );

    expect(container.querySelector(".md\\:grid-cols-4")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<CardGrid />);

    expect(asFragment()).toMatchSnapshot();
  });
});