// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ViewContact from "./ViewContact";
import { ViewContactProps } from "./ViewContact.types";

describe("Test Component", () => {
  let props: ViewContactProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<ViewContact {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ViewContact");

    expect(component).toHaveTextContent("harvey was here");
  });
});
