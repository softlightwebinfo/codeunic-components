// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ButtonDefault from "./ButtonDefault";
import { ButtonDefaultProps } from "./ButtonDefault.types";

describe("Test Component", () => {
    let props: ButtonDefaultProps;

    beforeEach(() => {
        props = {};
    });

    const renderComponent = () => render(<ButtonDefault {...props} />);

    it("should render foo text correctly", () => {
        const {getByTestId} = renderComponent();

        const component = getByTestId("ButtonDefault");

        expect(component).toHaveTextContent("harvey was here");
    });
});
