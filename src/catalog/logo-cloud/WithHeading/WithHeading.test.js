import { render, screen } from "@testing-library/react";
import WithHeading, { defaultProps } from "./WithHeading";

describe("WithHeading Component", () => {
  test("renders default heading", () => {
    render(<WithHeading />);

    expect(
      screen.getByText(defaultProps.heading)
    ).toBeInTheDocument();
  });

  test("renders all logos", () => {
    render(<WithHeading />);

    defaultProps.logos.forEach((logo) => {
      expect(
        screen.getByAltText(logo.alt)
      ).toBeInTheDocument();
    });
  });

  test("renders correct number of logos", () => {
    render(<WithHeading />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(defaultProps.logos.length);
  });

  test("renders badge text and subtext", () => {
    render(<WithHeading />);

    expect(
      screen.getByText(defaultProps.badge.text)
    ).toBeInTheDocument();

    expect(
      screen.getByText(defaultProps.badge.subtext)
    ).toBeInTheDocument();
  });

  test("does not render heading when heading is empty", () => {
    render(
      <WithHeading
        props={{
          ...defaultProps,
          heading: "",
        }}
      />
    );

    expect(
      screen.queryByText(defaultProps.heading)
    ).not.toBeInTheDocument();
  });

  test("does not render badge when badge is null", () => {
    render(
      <WithHeading
        props={{
          ...defaultProps,
          badge: null,
        }}
      />
    );

    expect(
      screen.queryByText(defaultProps.badge.text)
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(defaultProps.badge.subtext)
    ).not.toBeInTheDocument();
  });

  test("applies grayscale styles when grayscale is true", () => {
    render(
      <WithHeading
        props={{
          ...defaultProps,
          grayscale: true,
        }}
      />
    );

    const image = screen.getByAltText(
      defaultProps.logos[0].alt
    );

    expect(image).toHaveStyle({
      filter: "grayscale(100%)",
      opacity: "0.5",
    });
  });

  test("does not apply grayscale styles when grayscale is false", () => {
    render(
      <WithHeading
        props={{
          ...defaultProps,
          grayscale: false,
        }}
      />
    );

    const image = screen.getByAltText(
      defaultProps.logos[0].alt
    );

    expect(image).toHaveStyle({
      filter: "none",
      opacity: "1",
    });
  });

  test("renders custom heading", () => {
    render(
      <WithHeading
        props={{
          ...defaultProps,
          heading: "Our Partners",
        }}
      />
    );

    expect(
      screen.getByText("Our Partners")
    ).toBeInTheDocument();
  });

  test("renders custom badge content", () => {
    render(
      <WithHeading
        props={{
          ...defaultProps,
          badge: {
            text: "5,000+ customers",
            subtext: "across the globe",
          },
        }}
      />
    );

    expect(
      screen.getByText("5,000+ customers")
    ).toBeInTheDocument();

    expect(
      screen.getByText("across the globe")
    ).toBeInTheDocument();
  });

  test("renders custom logos", () => {
    const customProps = {
      heading: "Our Clients",
      logos: [
        {
          image: "/logo1.svg",
          alt: "Client One",
        },
        {
          image: "/logo2.svg",
          alt: "Client Two",
        },
      ],
      grayscale: false,
      badge: {
        text: "500+ companies",
        subtext: "worldwide",
      },
    };

    render(<WithHeading props={customProps} />);

    expect(
      screen.getByAltText("Client One")
    ).toBeInTheDocument();

    expect(
      screen.getByAltText("Client Two")
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole("img")
    ).toHaveLength(2);
  });

  test("all logos have correct src attributes", () => {
    render(<WithHeading />);

    defaultProps.logos.forEach((logo) => {
      const image = screen.getByAltText(logo.alt);

      expect(image).toHaveAttribute(
        "src",
        logo.image
      );
    });
  });

  test("renders section element", () => {
    const { container } = render(<WithHeading />);

    expect(
      container.querySelector("section")
    ).toBeInTheDocument();
  });

  test("renders empty logo list correctly", () => {
    render(
      <WithHeading
        props={{
          ...defaultProps,
          logos: [],
        }}
      />
    );

    expect(
      screen.queryAllByRole("img")
    ).toHaveLength(0);
  });
});