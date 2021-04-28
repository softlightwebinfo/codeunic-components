// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Footer from "./Footer";
import { FooterProps } from "./Footer.types";

describe("Test Component", () => {
  let props: FooterProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Footer {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Footer");

    expect(component).toHaveTextContent("harvey was here");
  });
});
