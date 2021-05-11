// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Step from "./Step";
import { StepProps } from "./Step.types";

describe("Test Component", () => {
  let props: StepProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Step {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Step");

    expect(component).toHaveTextContent("harvey was here");
  });
});
