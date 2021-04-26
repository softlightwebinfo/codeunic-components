// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import PriceRow from "./PriceRow";
import { PriceRowProps } from "./PriceRow.types";

describe("Test Component", () => {
  let props: PriceRowProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<PriceRow {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("PriceRow");

    expect(component).toHaveTextContent("harvey was here");
  });
});
