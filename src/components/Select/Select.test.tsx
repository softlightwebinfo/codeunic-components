// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Select from "./Select";
import { SelectProps } from "./Select.types";

describe("Test Component", () => {
  let props: SelectProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Select {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Select");

    expect(component).toHaveTextContent("harvey was here");
  });
});
