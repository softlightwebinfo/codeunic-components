// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TitleSubtitle from "./TitleSubtitle";
import { TitleSubtitleProps } from "./TitleSubtitle.types";

describe("Test Component", () => {
    let props: TitleSubtitleProps;

    beforeEach(() => {

    });

    const renderComponent = () => render(<TitleSubtitle {...props} />);

    it("should render foo text correctly", () => {
        const {getByTestId} = renderComponent();

        const component = getByTestId("TitleSubtitle");

        expect(component).toHaveTextContent("harvey was here");
    });
});
