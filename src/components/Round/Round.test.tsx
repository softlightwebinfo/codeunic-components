// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Round from "./Round";
import { RoundProps } from "./Round.types";

describe("Test Component", () => {
  let props: RoundProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Round {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Round");

    expect(component).toHaveTextContent("harvey was here");
  });
});
