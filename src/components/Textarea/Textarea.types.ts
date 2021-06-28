// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { FormLabelProps } from "../FormLabel/FormLabel.types";

export interface TextareaProps extends IProps, FormLabelProps {
    disabled?: boolean;
    readOnly?: boolean;
    value?: string;
    id?: string;
    name?: string;
    placeholder?: string;

    onChange?(evt: any): void;
}