// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Logo from "./Logo";
import { LogoProps } from "./Logo.types";

describe("Test Component", () => {
  let props: LogoProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Logo {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Logo");

    expect(component).toHaveTextContent("harvey was here");
  });
});
