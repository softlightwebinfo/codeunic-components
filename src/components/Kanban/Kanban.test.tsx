// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Kanban from "./Kanban";
import { KanbanProps } from "./Kanban.types";

describe("Test Component", () => {
  let props: KanbanProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<Kanban {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Kanban");

    expect(component).toHaveTextContent("harvey was here");
  });
});
