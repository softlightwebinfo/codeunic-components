// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TextInfo from "./TextInfo";
import { TextInfoProps } from "./TextInfo.types";

describe("Test Component", () => {
  let props: TextInfoProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<TextInfo {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("TextInfo");

    expect(component).toHaveTextContent("harvey was here");
  });
});
