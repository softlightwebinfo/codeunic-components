// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Textarea from "./Textarea";
import { TextareaProps } from "./Textarea.types";

describe("Test Component", () => {
  let props: TextareaProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Textarea {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Textarea");

    expect(component).toHaveTextContent("harvey was here");
  });
});
