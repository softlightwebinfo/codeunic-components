// Generated with util/create-component.js
import React, { useCallback } from "react";
import { InputFileProps } from "./InputFile.types";
import FormLabel from "../FormLabel/FormLabel";
import { BEM } from "../../libs/BEM";
import Input from "../Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const InputFile: React.FC<InputFileProps> = (props) => {
    const bm = new BEM("InputFile", {});
    bm.Append(props.className);

    const onChange = useCallback((evt) => {
        props.onChange?.(evt);
    }, []);

    return (
        <FormLabel help={props.help} label={props.label} className={bm.toString()} style={props.style}>
            <div className={bm.Children("content")}>
                <Input onChange={onChange} type={"file"}/>
                <FontAwesomeIcon icon={faUpload}/>
                <p>{props.placeholder}</p>
                <small>{props.subPlaceholder}</small>
            </div>
        </FormLabel>
    );
}

export default InputFile;