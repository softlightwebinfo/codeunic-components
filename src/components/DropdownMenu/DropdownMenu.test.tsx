// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import DropdownMenu from "./DropdownMenu";
import { DropdownMenuProps } from "./DropdownMenu.types";

describe("Test Component", () => {
  let props: DropdownMenuProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<DropdownMenu {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("DropdownMenu");

    expect(component).toHaveTextContent("harvey was here");
  });
});
