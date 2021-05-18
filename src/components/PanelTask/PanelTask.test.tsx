// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import PanelTask from "./PanelTask";
import { PanelTaskProps } from "./PanelTask.types";

describe("Test Component", () => {
  let props: PanelTaskProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<PanelTask {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("PanelTask");

    expect(component).toHaveTextContent("harvey was here");
  });
});
