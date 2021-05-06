// Generated with util/create-component.js
import React from "react";
import { FormGroupProps } from "./FormGroup.types";
import "./FormGroup.scss";
import { BEM } from "../../libs/BEM";

const FormGroup: React.FC<FormGroupProps> = (props) => {
    const bm = new BEM("FormGroup", {});
    bm.Append(props.className)
    return (
        <div
            className={bm.toString()}
            style={props.style}
        >
            {props.children}
        </div>
    );
}

export default FormGroup;

