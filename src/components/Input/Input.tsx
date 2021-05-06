// Generated with util/create-component.js
import React from "react";
import { InputProps } from "./Input.types";
import "./Input.scss";
import { BEM } from "../../libs/BEM";

const Input: React.FC<InputProps> = (props) => {
    const {type = "text"} = props;
    const bm = new BEM("Input", {});
    bm.Append(props.className);
    return (
        <label className={bm.toString()} style={props.style}>
            <input
                type={type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </label>
    );
}

export default Input;