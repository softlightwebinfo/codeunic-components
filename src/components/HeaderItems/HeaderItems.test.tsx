// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import HeaderItems from "./HeaderItems";
import { HeaderItemsProps } from "./HeaderItems.types";

describe("Test Component", () => {
  let props: HeaderItemsProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<HeaderItems {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("HeaderItems");

    expect(component).toHaveTextContent("harvey was here");
  });
});
