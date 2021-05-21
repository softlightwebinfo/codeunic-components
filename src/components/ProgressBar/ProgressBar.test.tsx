// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ProgressBar from "./ProgressBar";
import { ProgressBarProps } from "./ProgressBar.types";

describe("Test Component", () => {
  let props: ProgressBarProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<ProgressBar {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ProgressBar");

    expect(component).toHaveTextContent("harvey was here");
  });
});
