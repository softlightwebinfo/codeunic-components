// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CardSection from "./CardSection";
import { CardSectionProps } from "./CardSection.types";

describe("Test Component", () => {
  let props: CardSectionProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<CardSection {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("CardSection");

    expect(component).toHaveTextContent("harvey was here");
  });
});
