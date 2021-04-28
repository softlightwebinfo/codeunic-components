// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import List from "./List";
import { ListProps } from "./List.types";

describe("Test Component", () => {
  let props: ListProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<List {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("List");

    expect(component).toHaveTextContent("harvey was here");
  });
});
