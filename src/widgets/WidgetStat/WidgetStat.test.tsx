// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import WidgetStat from "./WidgetStat";
import { WidgetStatProps } from "./WidgetStat.types";

describe("Test Component", () => {
  let props: WidgetStatProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<WidgetStat {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("WidgetStat");

    expect(component).toHaveTextContent("harvey was here");
  });
});
