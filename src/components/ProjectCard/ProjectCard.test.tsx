// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ProjectCard from "./ProjectCard";
import { ProjectCardProps } from "./ProjectCard.types";

describe("Test Component", () => {
  let props: ProjectCardProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<ProjectCard {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ProjectCard");

    expect(component).toHaveTextContent("harvey was here");
  });
});
