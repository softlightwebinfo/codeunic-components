// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CardFooter from "./CardFooter";
import { CardFooterProps } from "./CardFooter.types";

describe("Test Component", () => {
  let props: CardFooterProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<CardFooter {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("CardFooter");

    expect(component).toHaveTextContent("harvey was here");
  });
});
