// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CardHeader from "./CardHeader";
import { CardHeaderProps } from "./CardHeader.types";

describe("Test Component", () => {
  let props: CardHeaderProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<CardHeader {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("CardHeader");

    expect(component).toHaveTextContent("harvey was here");
  });
});
