import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Label from "./Label";

describe("Label Component", () => {
  test("renders label text", () => {
    render(
      <Label text="Username" />
    );

    expect(
      screen.getByText("Username")
    ).toBeInTheDocument();
  });

  test("changes color when disabled", () => {
    render(
      <Label
        text="Username"
        disabled
      />
    );

    const label =
      screen.getByTestId("label-component");

    expect(label).toHaveStyle(
      "color: #999999"
    );
  });
});