// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CardPanelUser from "./CardPanelUser";
import { CardPanelUserProps } from "./CardPanelUser.types";

describe("Test Component", () => {
  let props: CardPanelUserProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<CardPanelUser {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("CardPanelUser");

    expect(component).toHaveTextContent("harvey was here");
  });
});
