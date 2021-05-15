// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Overlay from "./Overlay";
import { OverlayProps } from "./Overlay.types";

describe("Test Component", () => {
  let props: OverlayProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Overlay {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Overlay");

    expect(component).toHaveTextContent("harvey was here");
  });
});
