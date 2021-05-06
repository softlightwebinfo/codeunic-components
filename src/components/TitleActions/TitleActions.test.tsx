// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TitleActions from "./TitleActions";
import { TitleActionsProps } from "./TitleActions.types";

describe("Test Component", () => {
  let props: TitleActionsProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<TitleActions {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("TitleActions");

    expect(component).toHaveTextContent("harvey was here");
  });
});
