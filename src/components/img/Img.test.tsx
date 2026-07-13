import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Img from "./Img";

describe("Img Component", () => {
  test("renders image", () => {
    render(
      <Img
        src="test.jpg"
        alt="Test Image"
      />
    );

    expect(
      screen.getByAltText("Test Image")
    ).toBeInTheDocument();
  });

  test("changes appearance when disabled", () => {
    render(
      <Img
        src="test.jpg"
        alt="Test Image"
        disabled
      />
    );

    const image =
      screen.getByTestId("img-component");

    expect(image).toHaveStyle(
      "opacity: 0.5"
    );
  });
});