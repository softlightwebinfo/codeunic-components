// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ViewVideoConference from "./ViewVideoConference";
import { ViewVideoConferenceProps } from "./ViewVideoConference.types";

describe("Test Component", () => {
  let props: ViewVideoConferenceProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<ViewVideoConference {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ViewVideoConference");

    expect(component).toHaveTextContent("harvey was here");
  });
});
