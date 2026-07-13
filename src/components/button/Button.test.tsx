import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {

  test("renders button", () => {

    render(<Button label="Submit" />);

    expect(
      screen.getByText("Submit")
    ).toBeInTheDocument();

  });

  test("disabled button has grey background", () => {

    render(
      <Button
        label="Submit"
        disabled
      />
    );

    const button = screen.getByText("Submit");

    expect(button).toHaveStyle(
      "background-color: #cccccc"
    );

  });

});