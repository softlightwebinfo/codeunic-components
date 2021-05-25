// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import NoResultFound from "./NoResultFound";
import { NoResultFoundProps } from "./NoResultFound.types";

describe("Test Component", () => {
  let props: NoResultFoundProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<NoResultFound {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("NoResultFound");

    expect(component).toHaveTextContent("harvey was here");
  });
});
