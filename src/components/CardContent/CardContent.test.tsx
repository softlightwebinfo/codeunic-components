// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CardContent from "./CardContent";
import { CardContentProps } from "./CardContent.types";

describe("Test Component", () => {
  let props: CardContentProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<CardContent {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("CardContent");

    expect(component).toHaveTextContent("harvey was here");
  });
});
