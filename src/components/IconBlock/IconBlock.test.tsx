// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import IconBlock from "./IconBlock";
import { IconBlockProps } from "./IconBlock.types";

describe("Test Component", () => {
  let props: IconBlockProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<IconBlock {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("IconBlock");

    expect(component).toHaveTextContent("harvey was here");
  });
});
