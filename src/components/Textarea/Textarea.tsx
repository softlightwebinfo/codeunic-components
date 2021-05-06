// Generated with util/create-component.js
import React from "react";
import { TextareaProps } from "./Textarea.types";
import "./Textarea.scss";
import { BEM } from "../../libs/BEM";

const Textarea: React.FC<TextareaProps> = (props) => {
    const bm = new BEM("Textarea", {});
    bm.Append(props.className);
    return (
        <label className={bm.toString()} style={props.style}>
            <textarea
                cols={30}
                rows={10}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </label>
    );
}

export default Textarea;