// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CommentsList from "./CommentsList";
import { CommentsListProps } from "./CommentsList.types";

describe("Test Component", () => {
  let props: CommentsListProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<CommentsList {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("CommentsList");

    expect(component).toHaveTextContent("harvey was here");
  });
});
