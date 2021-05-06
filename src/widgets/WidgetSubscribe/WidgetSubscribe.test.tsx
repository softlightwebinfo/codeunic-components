// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import WidgetSubscribe from "./WidgetSubscribe";
import { WidgetSubscribeProps } from "./WidgetSubscribe.types";

describe("Test Component", () => {
  let props: WidgetSubscribeProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<WidgetSubscribe {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("WidgetSubscribe");

    expect(component).toHaveTextContent("harvey was here");
  });
});
