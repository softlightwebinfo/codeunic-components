// Generated with util/create-component.js
import React from "react";
import { FormLabelProps } from "./FormLabel.types";
import "./FormLabel.scss";
import { BEM } from "../../libs/BEM";
import TextInfo from "../TextInfo/TextInfo";

const FormLabel: React.FC<FormLabelProps> = (props) => {
    const bm = new BEM("FormLabel", {});
    bm.Append(props.className);
    return (
        <label className={bm.toString()} style={props.style}>
            {props.label && <TextInfo message={props.label}/>}
            {props.children}
            {props.help && <TextInfo message={props.help}/>}
        </label>
    );
}

export default FormLabel;