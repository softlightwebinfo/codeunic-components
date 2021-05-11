// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ViewPublishTicket from "./ViewPublishTicket";
import { ViewPublishTicketProps } from "./ViewPublishTicket.types";

describe("Test Component", () => {
  let props: ViewPublishTicketProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<ViewPublishTicket {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ViewPublishTicket");

    expect(component).toHaveTextContent("harvey was here");
  });
});
