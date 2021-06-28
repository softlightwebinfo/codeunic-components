// Generated with util/create-component.js
import React from "react";
import { CheckboxProps } from "./Checkbox.types";
import { BEM } from "../../libs/BEM";
import FormLabel from "../FormLabel/FormLabel";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popover from "../Popover/Popover";
import Input from "../Input/Input";

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const bm = new BEM("Checkbox", {});
    bm.Append(props.className);
    return (
        <FormLabel {...props.label} className={bm.toString()} style={props.style}>
            <div className={bm.Children("wrapper")}>
                <Input defaultValue={props.defaultValue} id={props.id} default type="checkbox"/>
            </div>
            <span>{props.text}</span>
            {props.info && (
                <Popover
                    className={bm.Children("info")}
                    trigger={<FontAwesomeIcon icon={faInfoCircle}/>}
                    text={props.info}
                />
            )}
        </FormLabel>
    );
}

export default Checkbox;
