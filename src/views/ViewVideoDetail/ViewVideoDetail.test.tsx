// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ViewVideoDetail from "./ViewVideoDetail";
import { ViewVideoDetailProps } from "./ViewVideoDetail.types";

describe("Test Component", () => {
  let props: ViewVideoDetailProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<ViewVideoDetail {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ViewVideoDetail");

    expect(component).toHaveTextContent("harvey was here");
  });
});
