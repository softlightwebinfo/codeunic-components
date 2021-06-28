// Generated with util/create-component.js
import React from "react";
import { SelectProps } from "./Select.types";
import { BEM } from "../../libs/BEM";
import FormLabel from "../FormLabel/FormLabel";
import { useForm } from "../../hooks/useForm";

const Select: React.FC<SelectProps> = (props) => {
    const bm = new BEM("Select", {});
    bm.Append(props.className);
    const {value, onChange} = useForm(props);
    return (
        <FormLabel {...props.label} className={bm.toString()} style={props.style}>
            <select id={props.id} onChange={onChange} value={value}>
                {props.options.map((item, index) => (
                    <option value={item.value} key={index}>{item.label}</option>
                ))}
            </select>
        </FormLabel>
    );
}

export default Select;
