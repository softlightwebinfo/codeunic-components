// Generated with util/create-component.js
import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";
import { BEM } from "../../libs/BEM";

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
    const bm = new BEM("Button", {
        default: props.default,
        single: props.single,
    });
    return (
        <button
            onClick={props.onClick}
            className={bm.toString()}
        >
            {children}
        </button>
    );
}

export default Button;
