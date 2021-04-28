// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Plan from "./Plan";
import { PlanProps } from "./Plan.types";

describe("Test Component", () => {
    let props: PlanProps;

    beforeEach(() => {

    });

    const renderComponent = () => render(<Plan {...props} />);

    it("should render foo text correctly", () => {
        const {getByTestId} = renderComponent();

        const component = getByTestId("Plan");

        expect(component).toHaveTextContent("harvey was here");
    });
});
