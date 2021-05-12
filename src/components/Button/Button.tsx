// Generated with util/create-component.js
import React from "react";
import { ButtonProps } from "./Button.types";
import style from "./Button.scss";
import { BEM } from "../../libs/BEM";

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
    const bm = new BEM("Button", {
        default: props.default,
        single: props.single,
        dark: props.dark,
        block: props.block,
        theme: props.theme,
    }, style);
    bm.Append(props.className);
    return (
        <button
            type={props.type}
            style={props.style}
            onClick={props.onClick}
            className={bm.toString()}
        >
            {children}
        </button>
    );
}

export default Button;