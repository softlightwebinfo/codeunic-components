// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import PermissionText from "./PermissionText";
import { PermissionTextProps } from "./PermissionText.types";

describe("Test Component", () => {
  let props: PermissionTextProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<PermissionText {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("PermissionText");

    expect(component).toHaveTextContent("harvey was here");
  });
});
