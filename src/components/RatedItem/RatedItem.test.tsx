// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import RatedItem from "./RatedItem";
import { RatedItemProps } from "./RatedItem.types";

describe("Test Component", () => {
  let props: RatedItemProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<RatedItem {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("RatedItem");

    expect(component).toHaveTextContent("harvey was here");
  });
});
