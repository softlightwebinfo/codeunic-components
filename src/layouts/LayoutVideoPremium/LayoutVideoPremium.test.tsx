// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import LayoutVideoPremium from "./LayoutVideoPremium";
import { LayoutVideoPremiumProps } from "./LayoutVideoPremium.types";

describe("Test Component", () => {
  let props: LayoutVideoPremiumProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<LayoutVideoPremium {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("LayoutVideoPremium");

    expect(component).toHaveTextContent("harvey was here");
  });
});
