// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import StatContent from "./StatContent";
import { StatContentProps } from "./StatContent.types";

describe("Test Component", () => {
  let props: StatContentProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<StatContent {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("StatContent");

    expect(component).toHaveTextContent("harvey was here");
  });
});
