// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CardTitleDescription from "./CardTitleDescription";
import { CardTitleDescriptionProps } from "./CardTitleDescription.types";

describe("Test Component", () => {
  let props: CardTitleDescriptionProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<CardTitleDescription {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("CardTitleDescription");

    expect(component).toHaveTextContent("harvey was here");
  });
});
