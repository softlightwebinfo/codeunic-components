// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Avatars from "./Avatars";
import { AvatarsProps } from "./Avatars.types";

describe("Test Component", () => {
  let props: AvatarsProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Avatars {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Avatars");

    expect(component).toHaveTextContent("harvey was here");
  });
});
