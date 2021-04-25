// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Arrow from "./Arrow";
import { ArrowProps } from "./Arrow.types";

describe("Test Component", () => {
    let props: ArrowProps;

    beforeEach(() => {
        props = {
            foo: "bar"
        };
    });

    const renderComponent = () => render(<Arrow {...props} />);

    it("should render foo text correctly", () => {
        const {getByTestId} = renderComponent();

        const component = getByTestId("Arrow");

        expect(component).toHaveTextContent("harvey was here");
    });
});
