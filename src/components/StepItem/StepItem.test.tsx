// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import StepItem from "./StepItem";
import { StepItemProps } from "./StepItem.types";

describe("Test Component", () => {
  let props: StepItemProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<StepItem {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("StepItem");

    expect(component).toHaveTextContent("harvey was here");
  });
});
