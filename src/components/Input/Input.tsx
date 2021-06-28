// Generated with util/create-component.js
import React from "react";
import { InputProps } from "./Input.types";
import { BEM } from "../../libs/BEM";
import FormLabel from "../FormLabel/FormLabel";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "../../hooks/useForm";

const Input: React.FC<InputProps> = (props) => {
    const {type = "text"} = props;
    const {onChange, value} = useForm(props);

    const bm = new BEM("Input", {
        default: props.default,
        search: props.search,
        border: props.border,
    });

    bm.Append(props.className);

    return (
        <FormLabel label={props.label} help={props.help} className={bm.toString()} style={props.style}>
            {props.search && (<FontAwesomeIcon icon={faSearch}/>)}
            <input
                autoFocus={props.autoFocus}
                disabled={props.disabled}
                readOnly={props.readOnly}
                id={props.id}
                name={props.name}
                type={type}
                value={props.type !== "checkbox" ? value : undefined}
                placeholder={props.placeholder}
                onChange={onChange}
                checked={props.type === "checkbox" ? value : undefined}
            />
        </FormLabel>
    );
}

export default Input;