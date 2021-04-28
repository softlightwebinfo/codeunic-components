// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import GridColumn from "./GridColumn";
import { GridColumnProps } from "./GridColumn.types";

describe("Test Component", () => {
  let props: GridColumnProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<GridColumn {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("GridColumn");

    expect(component).toHaveTextContent("harvey was here");
  });
});
