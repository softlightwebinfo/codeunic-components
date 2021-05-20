// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ContextMenu from "./ContextMenu";
import { ContextMenuProps } from "./ContextMenu.types";

describe("Test Component", () => {
  let props: ContextMenuProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<ContextMenu {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ContextMenu");

    expect(component).toHaveTextContent("harvey was here");
  });
});
