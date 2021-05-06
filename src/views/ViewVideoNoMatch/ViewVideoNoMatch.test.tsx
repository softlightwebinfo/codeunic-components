// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ViewVideoNoMatch from "./ViewVideoNoMatch";
import { ViewVideoNoMatchProps } from "./ViewVideoNoMatch.types";

describe("Test Component", () => {
  let props: ViewVideoNoMatchProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<ViewVideoNoMatch {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ViewVideoNoMatch");

    expect(component).toHaveTextContent("harvey was here");
  });
});
