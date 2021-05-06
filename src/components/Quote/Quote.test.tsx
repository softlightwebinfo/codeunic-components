// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Quote from "./Quote";
import { QuoteProps } from "./Quote.types";

describe("Test Component", () => {
  let props: QuoteProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Quote {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Quote");

    expect(component).toHaveTextContent("harvey was here");
  });
});
