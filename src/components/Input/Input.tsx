// Generated with util/create-component.js
import React from "react";
import { InputProps } from "./Input.types";
import style from "./Input.scss";
import { BEM } from "../../libs/BEM";
import FormLabel from "../FormLabel/FormLabel";

const Input: React.FC<InputProps> = (props) => {
    const {type = "text"} = props;
    const bm = new BEM("Input", {}, style);
    bm.Append(props.className);
    return (
        <FormLabel label={props.label} help={props.help} className={bm.toString()} style={props.style}>
            <input
                type={type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </FormLabel>
    );
}

export default Input;