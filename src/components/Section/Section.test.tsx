// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Section from "./Section";
import { SectionProps } from "./Section.types";

describe("Test Component", () => {
  let props: SectionProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Section {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Section");

    expect(component).toHaveTextContent("harvey was here");
  });
});
