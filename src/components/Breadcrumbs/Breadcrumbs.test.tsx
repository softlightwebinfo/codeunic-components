// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Breadcrumbs from "./Breadcrumbs";
import { BreadcrumbsProps } from "./Breadcrumbs.types";

describe("Test Component", () => {
  let props: BreadcrumbsProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Breadcrumbs {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Breadcrumbs");

    expect(component).toHaveTextContent("harvey was here");
  });
});
