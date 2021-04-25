// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SlickVideoItem from "./SlickVideoItem";
import { SlickVideoItemProps } from "./SlickVideoItem.types";

describe("Test Component", () => {
  let props: SlickVideoItemProps;

  beforeEach(() => {
    props = {
    };
  });

  const renderComponent = () => render(<SlickVideoItem {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("SlickVideoItem");

    expect(component).toHaveTextContent("harvey was here");
  });
});
