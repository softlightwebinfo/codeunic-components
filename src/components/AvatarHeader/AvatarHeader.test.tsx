// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import AvatarHeader from "./AvatarHeader";
import { AvatarHeaderProps } from "./AvatarHeader.types";

describe("Test Component", () => {
  let props: AvatarHeaderProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<AvatarHeader {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("AvatarHeader");

    expect(component).toHaveTextContent("harvey was here");
  });
});
