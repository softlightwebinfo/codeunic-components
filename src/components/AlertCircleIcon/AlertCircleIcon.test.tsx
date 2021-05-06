// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import AlertCircleIcon from "./AlertCircleIcon";
import { AlertCircleIconProps } from "./AlertCircleIcon.types";

describe("Test Component", () => {
    let props: AlertCircleIconProps;

    beforeEach(() => {

    });

    const renderComponent = () => render(<AlertCircleIcon {...props} />);

    it("should render foo text correctly", () => {
        const {getByTestId} = renderComponent();

        const component = getByTestId("AlertCircleIcon");

        expect(component).toHaveTextContent("harvey was here");
    });
});
