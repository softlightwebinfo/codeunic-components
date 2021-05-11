// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import InputFile from "./InputFile";
import { InputFileProps } from "./InputFile.types";

describe("Test Component", () => {
  let props: InputFileProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<InputFile {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("InputFile");

    expect(component).toHaveTextContent("harvey was here");
  });
});
