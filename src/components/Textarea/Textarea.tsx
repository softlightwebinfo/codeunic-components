// Generated with util/create-component.js
import React from "react";
import { TextareaProps } from "./Textarea.types";
import { BEM } from "../../libs/BEM";
import FormLabel from "../FormLabel/FormLabel";
import { useForm } from "../../hooks/useForm";

const Textarea: React.FC<TextareaProps> = (props) => {
    const bm = new BEM("Textarea", {});
    bm.Append(props.className);

    const {value, onChange} = useForm(props);

    return (
        <FormLabel help={props.help} label={props.label} className={bm.toString()} style={props.style}>
            <textarea
                id={props.id}
                disabled={props.disabled}
                readOnly={props.readOnly}
                cols={30}
                rows={10}
                value={value}
                onChange={onChange}
                placeholder={props.placeholder}
                name={props.name}
            />
        </FormLabel>
    );
}

export default Textarea;