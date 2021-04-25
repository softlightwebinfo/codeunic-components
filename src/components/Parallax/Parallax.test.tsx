// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Parallax from "./Parallax";
import { ParallexProps } from "./Parallex.types";

describe("Test Component", () => {
  let props: ParallexProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Parallax {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Parallex");

    expect(component).toHaveTextContent("harvey was here");
  });
});
