// Generated with util/create-component.js
import React from "react";
import { BigButtonProps } from "./BigButton.types";
import Button from "../Button/Button";
import { BEM } from "../../libs/BEM";

const BigButton: React.FC<BigButtonProps> = (props) => {
    const bm = new BEM("BigButton", {});
    bm.Append(props.className);
    return (
        <div data-testid="BigButton" className={bm.toString()} style={props.style}>
            <Button dark onClick={props.onClick}>
                {props.icon}
                {props.title}
            </Button>
        </div>
    );
}

export default BigButton;