// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CardTitleDetail from "./CardTitleDetail";
import { CardTitleDetailProps } from "./CardTitleDetail.types";

describe("Test Component", () => {
  let props: CardTitleDetailProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<CardTitleDetail {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("CardTitleDetail");

    expect(component).toHaveTextContent("harvey was here");
  });
});
