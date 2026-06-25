import { render, screen } from "@testing-library/react";
import LogoGrid, { defaultProps } from "./LogoGrid";

describe("LogoGrid Component", () => {
  test("renders default label, heading and subheading", () => {
    render(<LogoGrid />);

    expect(
      screen.getByText(defaultProps.label)
    ).toBeInTheDocument();

    expect(
      screen.getByText(defaultProps.heading)
    ).toBeInTheDocument();

    expect(
      screen.getByText(defaultProps.subheading)
    ).toBeInTheDocument();
  });

  test("renders all logos", () => {
    render(<LogoGrid />);

    defaultProps.logos.forEach((logo) => {
      expect(screen.getByAltText(logo.alt)).toBeInTheDocument();
    });
  });

  test("renders correct number of logos", () => {
    render(<LogoGrid />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(defaultProps.logos.length);
  });

  test("does not render label when label is empty", () => {
    render(
      <LogoGrid
        props={{
          ...defaultProps,
          label: "",
        }}
      />
    );

    expect(
      screen.queryByText(defaultProps.label)
    ).not.toBeInTheDocument();
  });

  test("does not render heading when heading is empty", () => {
    render(
      <LogoGrid
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

  test("does not render subheading when subheading is empty", () => {
    render(
      <LogoGrid
        props={{
          ...defaultProps,
          subheading: "",
        }}
      />
    );

    expect(
      screen.queryByText(defaultProps.subheading)
    ).not.toBeInTheDocument();
  });

  test("applies grayscale styles when grayscale is true", () => {
    render(
      <LogoGrid
        props={{
          ...defaultProps,
          grayscale: true,
        }}
      />
    );

    const image = screen.getByAltText(defaultProps.logos[0].alt);

    expect(image).toHaveStyle({
      filter: "grayscale(100%)",
      opacity: "0.4",
    });
  });

  test("does not apply grayscale styles when grayscale is false", () => {
    render(
      <LogoGrid
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

  test("renders custom content correctly", () => {
    const customProps = {
      label: "PARTNERS",
      heading: "Our Clients",
      subheading: "Companies we work with",
      logos: [
        {
          image: "/logo1.svg",
          alt: "Client One",
        },
      ],
      grayscale: false,
      columns: 4,
    };

    render(<LogoGrid props={customProps} />);

    expect(screen.getByText("PARTNERS")).toBeInTheDocument();
    expect(screen.getByText("Our Clients")).toBeInTheDocument();
    expect(
      screen.getByText("Companies we work with")
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Client One")
    ).toBeInTheDocument();
  });

  test("renders logo captions", () => {
    render(<LogoGrid />);

    defaultProps.logos.forEach((logo) => {
      const captions = screen.getAllByText(logo.alt);
      expect(captions.length).toBeGreaterThan(0);
    });
  });

  test("renders section element", () => {
    const { container } = render(<LogoGrid />);

    expect(
      container.querySelector("section")
    ).toBeInTheDocument();
  });
});