// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CollapseList from "./CollapseList";
import { CollapseListProps } from "./CollapseList.types";

describe("Test Component", () => {
  let props: CollapseListProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<CollapseList {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("CollapseList");

    expect(component).toHaveTextContent("harvey was here");
  });
});
