// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TitleCategory from "./TitleCategory";
import { TitleCategoryProps } from "./TitleCategory.types";

describe("Test Component", () => {
  let props: TitleCategoryProps;

  beforeEach(() => {
    props = {
    };
  });

  const renderComponent = () => render(<TitleCategory {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("TitleCategory");

    expect(component).toHaveTextContent("harvey was here");
  });
});
