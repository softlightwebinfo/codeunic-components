// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CommentsForm from "./CommentsForm";
import { CommentsFormProps } from "./CommentsForm.types";

describe("Test Component", () => {
  let props: CommentsFormProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<CommentsForm {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("CommentsForm");

    expect(component).toHaveTextContent("harvey was here");
  });
});
