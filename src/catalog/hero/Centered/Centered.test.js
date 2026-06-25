import { render, screen } from "@testing-library/react";
import Centered from "./Centered.jsx";

describe("Centered", () => {
  it("renders headline and actions by default", () => {
    render(<Centered />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Ship faster. Grow smarter."
    );
    expect(
      screen.getByRole("link", { name: /Start free trial/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Book a demo/i })
    ).toBeInTheDocument();
  });

  it("renders default subtext and badge", () => {
    render(<Centered />);

    expect(
      screen.getByText(/all-in-one platform for modern teams/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText("No credit card required • Cancel anytime")
    ).toBeInTheDocument();
  });

  it("hides badge when empty string is passed", () => {
    render(<Centered badge="" />);

    expect(
      screen.queryByText("No credit card required • Cancel anytime")
    ).not.toBeInTheDocument();
  });

  it("renders with custom headline", () => {
    render(<Centered headline="Build faster. Launch sooner." />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Build faster. Launch sooner."
    );
  });
});
