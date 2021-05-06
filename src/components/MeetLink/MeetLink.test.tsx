// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import MeetLink from "./MeetLink";
import { MeetLinkProps } from "./MeetLink.types";

describe("Test Component", () => {
    let props: MeetLinkProps;

    beforeEach(() => {

    });

    const renderComponent = () => render(<MeetLink {...props} />);

    it("should render foo text correctly", () => {
        const {getByTestId} = renderComponent();

        const component = getByTestId("MeetLink");

        expect(component).toHaveTextContent("harvey was here");
    });
});
