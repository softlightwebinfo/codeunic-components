// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Table from "./Table";
import { TableProps } from "./Table.types";

describe("Test Component", () => {
  let props: TableProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Table {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Table");

    expect(component).toHaveTextContent("harvey was here");
  });
});
