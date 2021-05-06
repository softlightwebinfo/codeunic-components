// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import WidgetRatedItem from "./WidgetRatedItem";
import { WidgetRatedItemProps } from "./WidgetRatedItem.types";

describe("Test Component", () => {
    let props: WidgetRatedItemProps;

    beforeEach(() => {

    });

    const renderComponent = () => render(<WidgetRatedItem {...props} />);

    it("should render foo text correctly", () => {
        const {getByTestId} = renderComponent();

        const component = getByTestId("WidgetRatedItem");

        expect(component).toHaveTextContent("harvey was here");
    });
});
