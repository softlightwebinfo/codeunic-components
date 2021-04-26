// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Collapse from "./Collapse";
import { CollapseProps } from "./Collapse.types";

describe("Test Component", () => {
  let props: CollapseProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<Collapse {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Collapse");

    expect(component).toHaveTextContent("harvey was here");
  });
});
