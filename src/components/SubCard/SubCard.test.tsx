// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SubCard from "./SubCard";
import { SubCardProps } from "./SubCard.types";

describe("Test Component", () => {
  let props: SubCardProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<SubCard {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("SubCard");

    expect(component).toHaveTextContent("harvey was here");
  });
});
