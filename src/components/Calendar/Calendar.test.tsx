// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Calendar from "./Calendar";
import { CalendarProps } from "./Calendar.types";

describe("Test Component", () => {
  let props: CalendarProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Calendar {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Calendar");

    expect(component).toHaveTextContent("harvey was here");
  });
});
