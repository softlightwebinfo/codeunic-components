// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Panel from "./Panel";
import { PanelProps } from "./Panel.types";

describe("Test Component", () => {
  let props: PanelProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Panel {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Panel");

    expect(component).toHaveTextContent("harvey was here");
  });
});
