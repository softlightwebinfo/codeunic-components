// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TablePrice from "./TablePrice";
import { TablePriceProps } from "./TablePrice.types";

describe("Test Component", () => {
  let props: TablePriceProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<TablePrice {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TablePrice");

    expect(component).toHaveTextContent("harvey was here");
  });
});
