// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TitleText from "./TitleText";
import { TitleTextProps } from "./TitleText.types";

describe("Test Component", () => {
  let props: TitleTextProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<TitleText {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("TitleText");

    expect(component).toHaveTextContent("harvey was here");
  });
});
