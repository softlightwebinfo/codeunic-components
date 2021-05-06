// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ClickOutside from "./ClickOutside";
import { ClickOutsideProps } from "./ClickOutside.types";

describe("Test Component", () => {
  let props: ClickOutsideProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<ClickOutside {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ClickOutside");

    expect(component).toHaveTextContent("harvey was here");
  });
});
