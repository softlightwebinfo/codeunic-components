// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import BigButton from "./BigButton";
import { BigButtonProps } from "./BigButton.types";

describe("Test Component", () => {
  let props: BigButtonProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<BigButton {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("BigButton");

    expect(component).toHaveTextContent("harvey was here");
  });
});
