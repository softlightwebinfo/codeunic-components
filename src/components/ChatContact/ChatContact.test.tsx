// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ChatContact from "./ChatContact";
import { ChatContactProps } from "./ChatContact.types";

describe("Test Component", () => {
  let props: ChatContactProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<ChatContact {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ChatContact");

    expect(component).toHaveTextContent("harvey was here");
  });
});
