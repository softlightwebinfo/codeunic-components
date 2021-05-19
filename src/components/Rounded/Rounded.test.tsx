// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Rounded from "./Rounded";
import { RoundedProps } from "./Rounded.types";

describe("Test Component", () => {
  let props: RoundedProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Rounded {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Rounded");

    expect(component).toHaveTextContent("harvey was here");
  });
});
