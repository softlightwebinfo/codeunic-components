// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ViewNotes from "./ViewNotes";
import { ViewNotesProps } from "./ViewNotes.types";

describe("Test Component", () => {
  let props: ViewNotesProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<ViewNotes {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ViewNotes");

    expect(component).toHaveTextContent("harvey was here");
  });
});
