// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TInputType } from "../../types/TInputType";
import { FormLabelProps } from "../FormLabel/FormLabel.types";

export interface InputProps extends IProps, FormLabelProps {
    id?: string;
    value?: string;
    name?: string;
    placeholder?: string;
    defaultValue?: string | boolean;
    type?: TInputType;
    default?: boolean;
    border?: boolean;
    search?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;

    onChange?(evt: any);
}
