// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import WindowHeader from "./WindowHeader";
import { WindowHeaderProps } from "./WindowHeader.types";

describe("Test Component", () => {
  let props: WindowHeaderProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<WindowHeader {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("WindowHeader");

    expect(component).toHaveTextContent("harvey was here");
  });
});
