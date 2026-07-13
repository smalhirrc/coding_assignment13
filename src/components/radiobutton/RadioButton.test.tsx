import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RadioButton from "./RadioButton";

describe("RadioButton Component", () => {
  test("renders radio button label", () => {
    render(
      <RadioButton label="Option 1" />
    );

    expect(
      screen.getByText("Option 1")
    ).toBeInTheDocument();
  });

  test("changes color when disabled", () => {
    render(
      <RadioButton
        label="Option 1"
        disabled
      />
    );

    const container =
      screen.getByTestId("radio-container");

    expect(container).toHaveStyle(
      "color: #999999"
    );
  });
});