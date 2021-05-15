// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TableColumn from "./TableColumn";
import { TableColumnProps } from "./TableColumn.types";

describe("Test Component", () => {
  let props: TableColumnProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<TableColumn {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TableColumn");

    expect(component).toHaveTextContent("harvey was here");
  });
});
