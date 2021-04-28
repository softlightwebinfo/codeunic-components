// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Navbar from "./Navbar";
import { NavbarProps } from "./Navbar.types";

describe("Test Component", () => {
  let props: NavbarProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<Navbar {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Navbar");

    expect(component).toHaveTextContent("harvey was here");
  });
});
