// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import VideoPremium from "./VideoPremium";
import { VideoPremiumProps } from "./VideoPremium.types";

describe("Test Component", () => {
  let props: VideoPremiumProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<VideoPremium {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("VideoPremium");

    expect(component).toHaveTextContent("harvey was here");
  });
});
