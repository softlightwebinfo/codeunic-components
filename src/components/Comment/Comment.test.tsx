// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Comment from "./Comment";
import { CommentProps } from "./Comment.types";

describe("Test Component", () => {
  let props: CommentProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Comment {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Comment");

    expect(component).toHaveTextContent("harvey was here");
  });
});
