// Generated with util/create-component.js
import React from "react";
import { FormGroupProps } from "./FormGroup.types";
import { BEM } from "../../libs/BEM";
import FormLabel from "../FormLabel/FormLabel";

const FormGroup: React.FC<FormGroupProps> = (props) => {
    const bm = new BEM("FormGroup", {
        default: props.default,
    });
    bm.Append(props.className)
    return (
        <FormLabel
            helpColor={props.helpColor}
            label={props.label}
            help={props.help}
            component={props.component ?? "div"}
            helpOnClick={props.helpOnClick}
            className={bm.toString()}
            style={props.style}
        >
            {props.children}
        </FormLabel>
    );
}

export default FormGroup;
