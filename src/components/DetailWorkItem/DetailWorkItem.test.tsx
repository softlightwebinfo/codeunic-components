// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import DetailWorkItem from "./DetailWorkItem";
import { DetailWorkItemProps } from "./DetailWorkItem.types";

describe("Test Component", () => {
  let props: DetailWorkItemProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<DetailWorkItem {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("DetailWorkItem");

    expect(component).toHaveTextContent("harvey was here");
  });
});
