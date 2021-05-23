// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ViewForumList from "./ViewForumList";
import { ViewForumListProps } from "./ViewForumList.types";

describe("Test Component", () => {
  let props: ViewForumListProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<ViewForumList {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ViewForumList");

    expect(component).toHaveTextContent("harvey was here");
  });
});
