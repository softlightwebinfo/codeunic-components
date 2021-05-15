// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Popover from "./Popover";
import { PopoverProps } from "./Popover.types";

describe("Test Component", () => {
  let props: PopoverProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Popover {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Popover");

    expect(component).toHaveTextContent("harvey was here");
  });
});
