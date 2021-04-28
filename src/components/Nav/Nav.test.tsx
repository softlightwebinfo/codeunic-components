// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Nav from "./Nav";
import { NavProps } from "./Nav.types";

describe("Test Component", () => {
  let props: NavProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Nav {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Nav");

    expect(component).toHaveTextContent("harvey was here");
  });
});
