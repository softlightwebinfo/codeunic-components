// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import LayoutCardVideo from "./LayoutCardVideo";
import { LayoutCardVideoProps } from "./LayoutCardVideo.types";

describe("Test Component", () => {
  let props: LayoutCardVideoProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<LayoutCardVideo {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("LayoutCardVideo");

    expect(component).toHaveTextContent("harvey was here");
  });
});
