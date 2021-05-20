// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import DatePoint from "./DatePoint";
import { DatePointProps } from "./DatePoint.types";

describe("DatePoint Component", () => {
  let props: DatePointProps;

  beforeEach(() => {
    props = {
      date: "2020-10-02"
    };
  });

  const renderComponent = () => render(<DatePoint {...props} />);

  it("should render foo text correctly", () => {
    props.date = "2020-10-02";
    const { getByTestId } = renderComponent();

    const component = getByTestId("DatePoint");

    expect(component).toHaveTextContent("2020-10-02");
  });
});
