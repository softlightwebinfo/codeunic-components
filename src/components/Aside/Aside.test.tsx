// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Aside from "./Aside";
import { AsideProps } from "./Aside.types";

describe("Test Component", () => {
  let props: AsideProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Aside {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Aside");

    expect(component).toHaveTextContent("harvey was here");
  });
});
