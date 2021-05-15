// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Status from "./Status";
import { StatusProps } from "./Status.types";

describe("Test Component", () => {
  let props: StatusProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Status {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Status");

    expect(component).toHaveTextContent("harvey was here");
  });
});
