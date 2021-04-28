// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Menu from "./Menu";
import { MenuProps } from "./Menu.types";

describe("Test Component", () => {
  let props: MenuProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Menu {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Menu");

    expect(component).toHaveTextContent("harvey was here");
  });
});
