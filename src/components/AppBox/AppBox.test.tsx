// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import AppBox from "./AppBox";
import { AppBoxProps } from "./AppBox.types";

describe("Test Component", () => {
  let props: AppBoxProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<AppBox {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("AppBox");

    expect(component).toHaveTextContent("harvey was here");
  });
});
