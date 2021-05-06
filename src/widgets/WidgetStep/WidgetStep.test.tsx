// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import WidgetStep from "./WidgetStep";
import { WidgetStepProps } from "./WidgetStep.types";

describe("Test Component", () => {
    let props: WidgetStepProps;

    beforeEach(() => {

    });

    const renderComponent = () => render(<WidgetStep {...props} />);

    it("should render foo text correctly", () => {
        const {getByTestId} = renderComponent();

        const component = getByTestId("WidgetStep");

        expect(component).toHaveTextContent("harvey was here");
    });
});
