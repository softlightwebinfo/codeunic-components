// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ActiveItem from "./ActiveItem";
import { ActiveItemProps } from "./ActiveItem.types";

describe("Test Component", () => {
  let props: ActiveItemProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<ActiveItem {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ActiveItem");

    expect(component).toHaveTextContent("harvey was here");
  });
});
