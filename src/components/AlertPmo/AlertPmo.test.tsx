// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import AlertPmo from "./AlertPmo";
import { AlertPmoProps } from "./AlertPmo.types";

describe("Test Component", () => {
  let props: AlertPmoProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<AlertPmo {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("AlertPmo");

    expect(component).toHaveTextContent("harvey was here");
  });
});
