// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TableBase from "./TableBase";
import { TableBaseProps } from "./TableBase.types";

describe("Test Component", () => {
  let props: TableBaseProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<TableBase {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("TableBase");

    expect(component).toHaveTextContent("harvey was here");
  });
});
