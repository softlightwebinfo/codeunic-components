// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CardArticle from "./CardArticle";
import { CardArticleProps } from "./CardArticle.types";

describe("Test Component", () => {
  let props: CardArticleProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<CardArticle {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("CardArticle");

    expect(component).toHaveTextContent("harvey was here");
  });
});
