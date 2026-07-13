import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Table from "./Table";

describe("Table Component", () => {
  const headers = [
    "Name",
    "Age",
  ];

  const data = [
    ["John", "25"],
  ];

  test("renders table content", () => {
    render(
      <Table
        headers={headers}
        data={data}
      />
    );

    expect(
      screen.getByText("John")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Age")
    ).toBeInTheDocument();
  });

  test("changes background color when disabled", () => {
    render(
      <Table
        headers={headers}
        data={data}
        disabled
      />
    );

    const table =
      screen.getByTestId("table-component");

    expect(table).toHaveStyle(
      "background-color: #cccccc"
    );
  });
});