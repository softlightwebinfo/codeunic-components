// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Portal from "./Portal";
import { PortalProps } from "./Portal.types";

describe("Test Component", () => {
  let props: PortalProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Portal {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Portal");

    expect(component).toHaveTextContent("harvey was here");
  });
});
