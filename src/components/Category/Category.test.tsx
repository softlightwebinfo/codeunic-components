// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Category from "./Category";
import { CategoryProps } from "./Category.types";

describe("Test Component", () => {
    let props: CategoryProps;

    beforeEach(() => {

    });

    const renderComponent = () => render(<Category {...props} />);

    it("should render foo text correctly", () => {
        const {getByTestId} = renderComponent();

        const component = getByTestId("Category");

        expect(component).toHaveTextContent("harvey was here");
    });
});
