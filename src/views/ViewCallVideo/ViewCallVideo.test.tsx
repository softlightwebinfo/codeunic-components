// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ViewCallVideo from "./ViewCallVideo";
import { ViewCallVideoProps } from "./ViewCallVideo.types";

describe("Test Component", () => {
  let props: ViewCallVideoProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<ViewCallVideo {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ViewCallVideo");

    expect(component).toHaveTextContent("harvey was here");
  });
});
