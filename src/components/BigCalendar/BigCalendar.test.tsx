// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import BigCalendar from "./BigCalendar";
import { BigCalendarProps } from "./BigCalendar.types";

describe("Test Component", () => {
  let props: BigCalendarProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<BigCalendar {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("BigCalendar");

    expect(component).toHaveTextContent("harvey was here");
  });
});
