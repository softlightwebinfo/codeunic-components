// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Grid from "./Grid";
import { GridProps } from "./Grid.types";

describe("Test Component", () => {
  let props: GridProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Grid {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Grid");

    expect(component).toHaveTextContent("harvey was here");
  });
});
