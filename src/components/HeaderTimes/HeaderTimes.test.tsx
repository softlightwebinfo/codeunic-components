// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import HeaderTimes from "./HeaderTimes";
import { HeaderTimesProps } from "./HeaderTimes.types";

describe("Test Component", () => {
  let props: HeaderTimesProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<HeaderTimes {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("HeaderTimes");

    expect(component).toHaveTextContent("harvey was here");
  });
});
