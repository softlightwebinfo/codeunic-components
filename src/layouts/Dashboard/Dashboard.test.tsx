// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";
import { DashboardProps } from "./Dashboard.types";

describe("Test Component", () => {
  let props: DashboardProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Dashboard {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Dashboard");

    expect(component).toHaveTextContent("harvey was here");
  });
});
