// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TableRow from "./TableRow";
import { TableRowProps } from "./TableRow.types";

describe("Test Component", () => {
  let props: TableRowProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<TableRow {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TableRow");

    expect(component).toHaveTextContent("harvey was here");
  });
});
