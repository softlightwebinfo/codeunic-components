// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ChatBlock from "./ChatBlock";
import { ChatBlockProps } from "./ChatBlock.types";

describe("Test Component", () => {
  let props: ChatBlockProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<ChatBlock {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ChatBlock");

    expect(component).toHaveTextContent("harvey was here");
  });
});
