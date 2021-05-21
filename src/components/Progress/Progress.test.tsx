// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Progress from "./Progress";
import { ProgressProps } from "./Progress.types";

describe("Test Component", () => {
  let props: ProgressProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Progress {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Progress");

    expect(component).toHaveTextContent("harvey was here");
  });
});
