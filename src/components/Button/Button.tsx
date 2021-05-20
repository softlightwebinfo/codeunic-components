// Generated with util/create-component.js
import React from "react";
import { ButtonProps } from "./Button.types";
import { BEM } from "../../libs/BEM";

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
    const bm = new BEM("Button", {
        default: props.default,
        isIcon: props.isIcon,
        single: props.single,
        dark: props.dark,
        block: props.block,
        theme: props.theme,
        original: props.original,
    });
    bm.Append(props.className);
    return (
        <button
            type={props.type ?? "button"}
            style={props.style}
            onClick={props.onClick}
            className={bm.toString()}
        >
            {children}
        </button>
    );
}

export default Button;