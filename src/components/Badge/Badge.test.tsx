// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Badge from "./Badge";
import { BadgeProps } from "./Badge.types";

describe("Test Component", () => {
  let props: BadgeProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Badge {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Badge");

    expect(component).toHaveTextContent("harvey was here");
  });
});
