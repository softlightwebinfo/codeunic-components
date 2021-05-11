// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import FormLabel from "./FormLabel";
import { FormLabelProps } from "./FormLabel.types";

describe("Test Component", () => {
  let props: FormLabelProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<FormLabel {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("FormLabel");

    expect(component).toHaveTextContent("harvey was here");
  });
});
