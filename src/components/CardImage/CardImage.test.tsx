// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CardImage from "./CardImage";
import { CardImageProps } from "./CardImage.types";

describe("Test Component", () => {
  let props: CardImageProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<CardImage {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("CardImage");

    expect(component).toHaveTextContent("harvey was here");
  });
});
