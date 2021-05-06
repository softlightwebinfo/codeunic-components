// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ChatSection from "./ChatSection";
import { ChatSectionProps } from "./ChatSection.types";

describe("Test Component", () => {
  let props: ChatSectionProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<ChatSection {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ChatSection");

    expect(component).toHaveTextContent("harvey was here");
  });
});
