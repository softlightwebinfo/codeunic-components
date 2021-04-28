// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Live from "./Live";
import { LiveProps } from "./Live.types";

describe("Test Component", () => {
  let props: LiveProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Live {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Live");

    expect(component).toHaveTextContent("harvey was here");
  });
});
