// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import MeetingInfo from "./MeetingInfo";
import { MeetingInfoProps } from "./MeetingInfo.types";

describe("Test Component", () => {
  let props: MeetingInfoProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<MeetingInfo {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("MeetingInfo");

    expect(component).toHaveTextContent("harvey was here");
  });
});
