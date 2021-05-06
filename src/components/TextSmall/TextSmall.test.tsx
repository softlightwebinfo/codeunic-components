// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TextSmall from "./TextSmall";
import { TextSmallProps } from "./TextSmall.types";

describe("Test Component", () => {
    let props: TextSmallProps;

    beforeEach(() => {

    });

    const renderComponent = () => render(<TextSmall {...props} />);

    it("should render foo text correctly", () => {
        const {getByTestId} = renderComponent();

        const component = getByTestId("TextSmall");

        expect(component).toHaveTextContent("harvey was here");
    });
});
