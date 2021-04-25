// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SlickList from "./SlickList";
import { SlickListProps } from "./SlickList.types";

describe("Test Component", () => {
  let props: SlickListProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SlickList {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SlickList");

    expect(component).toHaveTextContent("harvey was here");
  });
});
