// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CardIcon from "./CardIcon";
import { CardIconProps } from "./CardIcon.types";

describe("Test Component", () => {
  let props: CardIconProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<CardIcon {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("CardIcon");

    expect(component).toHaveTextContent("harvey was here");
  });
});
