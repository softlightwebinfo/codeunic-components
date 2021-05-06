// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ChatSendMsg from "./ChatSendMsg";
import { ChatSendMsgProps } from "./ChatSendMsg.types";

describe("Test Component", () => {
  let props: ChatSendMsgProps;

  beforeEach(() => {

  });

  const renderComponent = () => render(<ChatSendMsg {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ChatSendMsg");

    expect(component).toHaveTextContent("harvey was here");
  });
});
