// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import AvatarTitle from "./AvatarTitle";
import { AvatarTitleProps } from "./AvatarTitle.types";

describe("Test Component", () => {
  let props: AvatarTitleProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<AvatarTitle {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("AvatarTitle");

    expect(component).toHaveTextContent("harvey was here");
  });
});
