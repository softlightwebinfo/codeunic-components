// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Toolbar from "./Toolbar";
import { ToolbarProps } from "./Toolbar.types";

describe("Test Component", () => {
  let props: ToolbarProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Toolbar {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Toolbar");

    expect(component).toHaveTextContent("harvey was here");
  });
});
