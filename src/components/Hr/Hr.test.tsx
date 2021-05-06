// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Hr from "./Hr";
import { HrProps } from "./Hr.types";

describe("Test Component", () => {
  let props: HrProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Hr {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Hr");

    expect(component).toHaveTextContent("harvey was here");
  });
});
