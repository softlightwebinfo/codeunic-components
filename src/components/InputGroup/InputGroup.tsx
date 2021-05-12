// Generated with util/create-component.js
import React from "react";
import { InputGroupProps } from "./InputGroup.types";
import style from "./InputGroup.scss";
import { BEM } from "../../libs/BEM";

const InputGroup: React.FC<InputGroupProps> = (props) => {
    const bm = new BEM("InputGroup", {}, style);
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            <div className={bm.Children("icon")}>{props.icon}</div>
            <div className={bm.Children("content")}>{props.children}</div>
        </div>
    );
}

export default InputGroup;

