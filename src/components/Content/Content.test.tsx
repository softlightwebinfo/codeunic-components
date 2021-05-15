// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Content from "./Content";
import { ContentProps } from "./Content.types";

describe("Test Component", () => {
  let props: ContentProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Content {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Content");

    expect(component).toHaveTextContent("harvey was here");
  });
});
