// Generated with util/create-component.js
import React from "react";
import { FormLabelProps } from "./FormLabel.types";
import style from "./FormLabel.scss";
import { BEM } from "../../libs/BEM";
import TextInfo from "../TextInfo/TextInfo";

const FormLabel: React.FC<FormLabelProps> = (props) => {
    const bm = new BEM("FormLabel", {}, style);
    bm.Append(props.className);
    const Component: any = props.component ?? "label";
    return (
        <Component className={bm.toString()} style={props.style}>
            {props.label && <TextInfo message={props.label}/>}
            {props.children}
            {props.help && (
                <TextInfo
                    onClick={props.helpOnClick}
                    style={{
                        color: props.helpColor,
                    }}
                    message={props.help}
                />
            )}
        </Component>
    );
}

export default FormLabel;