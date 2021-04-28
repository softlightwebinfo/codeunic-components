// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CardTitle from "./CardTitle";
import { CardTitleProps } from "./CardTitle.types";

describe("Test Component", () => {
  let props: CardTitleProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<CardTitle {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("CardTitle");

    expect(component).toHaveTextContent("harvey was here");
  });
});
