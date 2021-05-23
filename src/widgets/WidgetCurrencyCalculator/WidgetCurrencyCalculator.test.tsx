// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import WidgetCurrencyCalculator from "./WidgetCurrencyCalculator";
import { WidgetCurrencyCalculatorProps } from "./WidgetCurrencyCalculator.types";

describe("Test Component", () => {
  let props: WidgetCurrencyCalculatorProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<WidgetCurrencyCalculator {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("WidgetCurrencyCalculator");

    expect(component).toHaveTextContent("harvey was here");
  });
});
