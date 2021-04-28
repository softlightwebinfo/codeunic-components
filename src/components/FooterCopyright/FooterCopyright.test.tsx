// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import FooterCopyright from "./FooterCopyright";
import { FooterCopyrightProps } from "./FooterCopyright.types";

describe("Test Component", () => {
  let props: FooterCopyrightProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<FooterCopyright {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("FooterCopyright");

    expect(component).toHaveTextContent("harvey was here");
  });
});
