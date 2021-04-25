// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SlickItem from "./SlickItem";
import { SlickItemProps } from "./SlickItem.types";

describe("Test Component", () => {
  let props: SlickItemProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SlickItem {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("SlickItem");

    expect(component).toHaveTextContent("harvey was here");
  });
});
