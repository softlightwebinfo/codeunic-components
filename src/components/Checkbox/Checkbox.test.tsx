// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Checkbox from "./Checkbox";
import { CheckboxProps } from "./Checkbox.types";

describe("Test Component", () => {
  let props: CheckboxProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Checkbox {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Checkbox");

    expect(component).toHaveTextContent("harvey was here");
  });
});
