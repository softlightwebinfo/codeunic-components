// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import FormGroup from "./FormGroup";
import { FormGroupProps } from "./FormGroup.types";

describe("Test Component", () => {
  let props: FormGroupProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<FormGroup {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("FormGroup");

    expect(component).toHaveTextContent("harvey was here");
  });
});
