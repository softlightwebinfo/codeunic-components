// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import NoteContent from "./NoteContent";
import { NoteContentProps } from "./NoteContent.types";

describe("Test Component", () => {
  let props: NoteContentProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<NoteContent {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("NoteContent");

    expect(component).toHaveTextContent("harvey was here");
  });
});
