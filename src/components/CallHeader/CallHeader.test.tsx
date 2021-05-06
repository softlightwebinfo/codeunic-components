// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CallHeader from "./CallHeader";
import { CallHeaderProps } from "./CallHeader.types";

describe("Test Component", () => {
  let props: CallHeaderProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<CallHeader {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("CallHeader");

    expect(component).toHaveTextContent("harvey was here");
  });
});
