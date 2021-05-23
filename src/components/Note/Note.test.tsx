// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Note from "./Note";
import { NoteProps } from "./Note.types";

describe("Test Component", () => {
  let props: NoteProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Note {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Note");

    expect(component).toHaveTextContent("harvey was here");
  });
});
