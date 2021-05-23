// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import WidgetDateTime from "./WidgetDateTime";
import { WidgetDateTimeProps } from "./WidgetDateTime.types";

describe("Test Component", () => {
  let props: WidgetDateTimeProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<WidgetDateTime {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("WidgetDateTime");

    expect(component).toHaveTextContent("harvey was here");
  });
});
