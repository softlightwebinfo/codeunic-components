// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Badges from "./Badges";
import { BadgesProps } from "./Badges.types";

describe("Test Component", () => {
  let props: BadgesProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Badges {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Badges");

    expect(component).toHaveTextContent("harvey was here");
  });
});
