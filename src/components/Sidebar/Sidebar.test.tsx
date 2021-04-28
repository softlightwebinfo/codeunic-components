// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Sidebar from "./Sidebar";
import { SidebarProps } from "./Sidebar.types";

describe("Test Component", () => {
  let props: SidebarProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Sidebar {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Sidebar");

    expect(component).toHaveTextContent("harvey was here");
  });
});
