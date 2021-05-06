// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import InputGroup from "./InputGroup";
import { InputGroupProps } from "./InputGroup.types";

describe("Test Component", () => {
  let props: InputGroupProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<InputGroup {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("InputGroup");

    expect(component).toHaveTextContent("harvey was here");
  });
});
