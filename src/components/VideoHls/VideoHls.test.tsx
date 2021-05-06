// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import VideoHls from "./VideoHls";
import { VideoHlsProps } from "./VideoHls.types";

describe("Test Component", () => {
  let props: VideoHlsProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<VideoHls {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("VideoHls");

    expect(component).toHaveTextContent("harvey was here");
  });
});
