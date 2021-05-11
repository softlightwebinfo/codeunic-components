// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ViewTicketHomePage from "./ViewTicketHomePage";
import { ViewTicketHomePageProps } from "./ViewTicketHomePage.types";

describe("Test Component", () => {
  let props: ViewTicketHomePageProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<ViewTicketHomePage {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ViewTicketHomePage");

    expect(component).toHaveTextContent("harvey was here");
  });
});
