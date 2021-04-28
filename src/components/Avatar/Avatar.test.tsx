// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Avatar from "./Avatar";
import { AvatarProps } from "./Avatar.types";

describe("Test Component", () => {
    let props: AvatarProps;

    beforeEach(() => {

    });

    const renderComponent = () => render(<Avatar {...props} />);

    it("should render foo text correctly", () => {
        const {getByTestId} = renderComponent();

        const component = getByTestId("Avatar");

        expect(component).toHaveTextContent("harvey was here");
    });
});
