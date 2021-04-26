// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import PriceBox from "./PriceBox";
import { PriceBoxProps } from "./PriceBox.types";

describe("Test Component", () => {
    let props: PriceBoxProps;

    beforeEach(() => {

    });

    const renderComponent = () => render(<PriceBox {...props} />);

    it("should render foo text correctly", () => {
        const {getByTestId} = renderComponent();

        const component = getByTestId("PriceBox");

        expect(component).toHaveTextContent("harvey was here");
    });
});
