// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import imports from "./imports";
import { importsProps } from "./imports.types";

describe("Test Component", () => {
  let props: importsProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<imports {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("imports");

    expect(component).toHaveTextContent("harvey was here");
  });
});
