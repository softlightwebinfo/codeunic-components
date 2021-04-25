// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SlickArrow from "./SlickArrow";
import { SlickArrowProps } from "./SlickArrow.types";

describe("Test Component", () => {
    let props: SlickArrowProps;

    beforeEach(() => {
        props = {};
    });

    const renderComponent = () => render(<SlickArrow {...props} />);

    it("should render foo text correctly", () => {
        const {getByTestId} = renderComponent();

        const component = getByTestId("SlickArrow");

        expect(component).toHaveTextContent("harvey was here");
    });
});
