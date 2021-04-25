// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ContainerFluid from "./ContainerFluid";
import { ContainerFluidProps } from "./ContainerFluid.types";

describe("Test Component", () => {
  let props: ContainerFluidProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<ContainerFluid {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ContainerFluid");

    expect(component).toHaveTextContent("harvey was here");
  });
});
