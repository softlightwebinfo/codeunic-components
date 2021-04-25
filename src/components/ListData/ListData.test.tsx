// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ListData from "./ListData";
import { ListDataProps } from "./ListData.types";

describe("Test Component", () => {
  let props: ListDataProps;

  beforeEach(() => {
    props = {
    };
  });

  const renderComponent = () => render(<ListData {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ListData");

    expect(component).toHaveTextContent("harvey was here");
  });
});
