// Generated with util/create-component.js
import React from "react";
import { TextareaProps } from "./Textarea.types";
import style from "./Textarea.scss";
import { BEM } from "../../libs/BEM";
import FormLabel from "../FormLabel/FormLabel";

const Textarea: React.FC<TextareaProps> = (props) => {
    const bm = new BEM("Textarea", {}, style);
    bm.Append(props.className);
    return (
        <FormLabel help={props.help} label={props.label} className={bm.toString()} style={props.style}>
            <textarea
                cols={30}
                rows={10}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </FormLabel>
    );
}

export default Textarea;