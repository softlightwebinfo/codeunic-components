// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import HeadExample from "./HeadExample";
import { HeadExampleProps } from "./HeadExample.types";

describe("Test Component", () => {
  let props: HeadExampleProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<HeadExample {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("HeadExample");

    expect(component).toHaveTextContent("harvey was here");
  });
});
