// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Widget from "./Widget";
import { WidgetProps } from "./Widget.types";

describe("Test Component", () => {
  let props: WidgetProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Widget {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Widget");

    expect(component).toHaveTextContent("harvey was here");
  });
});
