// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Window from "./Window";
import { WindowProps } from "./Window.types";

describe("Test Component", () => {
  let props: WindowProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Window {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Window");

    expect(component).toHaveTextContent("harvey was here");
  });
});
