// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Flyout from "./Flyout";
import { FlyoutProps } from "./Flyout.types";

describe("Test Component", () => {
  let props: FlyoutProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Flyout {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Flyout");

    expect(component).toHaveTextContent("harvey was here");
  });
});
