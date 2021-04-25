// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ListDataItem from "./ListDataItem";
import { ListDataItemProps } from "./ListDataItem.types";

describe("Test Component", () => {
  let props: ListDataItemProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<ListDataItem {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ListDataItem");

    expect(component).toHaveTextContent("harvey was here");
  });
});
