// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Scroll from "./Scroll";
import { ScrollProps } from "./Scroll.types";

describe("Test Component", () => {
  let props: ScrollProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Scroll {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Scroll");

    expect(component).toHaveTextContent("harvey was here");
  });
});
