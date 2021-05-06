// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CallFooter from "./CallFooter";
import { CallFooterProps } from "./CallFooter.types";

describe("Test Component", () => {
  let props: CallFooterProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<CallFooter {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("CallFooter");

    expect(component).toHaveTextContent("harvey was here");
  });
});
