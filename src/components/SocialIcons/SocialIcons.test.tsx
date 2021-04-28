// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SocialIcons from "./SocialIcons";
import { SocialIconsProps } from "./SocialIcons.types";

describe("Test Component", () => {
  let props: SocialIconsProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<SocialIcons {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("SocialIcons");

    expect(component).toHaveTextContent("harvey was here");
  });
});
