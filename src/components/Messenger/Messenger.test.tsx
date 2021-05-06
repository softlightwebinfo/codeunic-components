// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Messenger from "./Messenger";
import { MessengerProps } from "./Messenger.types";

describe("Test Component", () => {
    let props: MessengerProps;

    beforeEach(() => {

    });

    const renderComponent = () => render(<Messenger {...props} />);

    it("should render foo text correctly", () => {
        const {getByTestId} = renderComponent();

        const component = getByTestId("Messenger");

        expect(component).toHaveTextContent("harvey was here");
    });
});
