// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ViewMessenger from "./ViewMessenger";
import { ViewMessengerProps } from "./ViewMessenger.types";

describe("Test Component", () => {
  let props: ViewMessengerProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<ViewMessenger {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ViewMessenger");

    expect(component).toHaveTextContent("harvey was here");
  });
});
