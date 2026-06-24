import { render, screen } from "@testing-library/react";
import SimpleRow, { defaultProps } from "./SimpleRow";

describe("SimpleRow Component", () => {
  test("renders all logos", () => {
    render(<SimpleRow />);

    defaultProps.logos.forEach((logo) => {
      expect(screen.getByAltText(logo.alt)).toBeInTheDocument();
    });
  });

  test("renders correct number of logos", () => {
    render(<SimpleRow />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(defaultProps.logos.length);
  });

  test("applies grayscale styles when grayscale is true", () => {
    render(
      <SimpleRow
        props={{
          ...defaultProps,
          grayscale: true,
        }}
      />
    );

    const image = screen.getByAltText(defaultProps.logos[0].alt);

    expect(image).toHaveStyle({
      filter: "grayscale(100%)",
      opacity: "0.5",
    });
  });

  test("does not apply grayscale styles when grayscale is false", () => {
    render(
      <SimpleRow
        props={{
          ...defaultProps,
          grayscale: false,
        }}
      />
    );

    const image = screen.getByAltText(defaultProps.logos[0].alt);

    expect(image).toHaveStyle({
      filter: "none",
      opacity: "1",
    });
  });

  test("renders custom logos correctly", () => {
    const customProps = {
      logos: [
        {
          image: "/custom-logo.svg",
          alt: "Custom Logo",
        },
      ],
      grayscale: false,
    };

    render(<SimpleRow props={customProps} />);

    expect(
      screen.getByAltText("Custom Logo")
    ).toBeInTheDocument();
  });

  test("renders multiple custom logos", () => {
    const customProps = {
      logos: [
        {
          image: "/logo1.svg",
          alt: "Logo One",
        },
        {
          image: "/logo2.svg",
          alt: "Logo Two",
        },
      ],
      grayscale: false,
    };

    render(<SimpleRow props={customProps} />);

    expect(screen.getByAltText("Logo One")).toBeInTheDocument();
    expect(screen.getByAltText("Logo Two")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);
  });

  test("renders section element", () => {
    const { container } = render(<SimpleRow />);

    expect(
      container.querySelector("section")
    ).toBeInTheDocument();
  });

  test("all logos have src attribute", () => {
    render(<SimpleRow />);

    defaultProps.logos.forEach((logo) => {
      const image = screen.getByAltText(logo.alt);

      expect(image).toHaveAttribute("src", logo.image);
    });
  });

  test("renders empty state when logos array is empty", () => {
    render(
      <SimpleRow
        props={{
          logos: [],
          grayscale: false,
        }}
      />
    );

    expect(screen.queryAllByRole("img")).toHaveLength(0);
  });
});