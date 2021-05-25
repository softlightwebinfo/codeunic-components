// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TInputType } from "../../types/TInputType";
import { FormLabelProps } from "../FormLabel/FormLabel.types";

export interface InputProps extends IProps, FormLabelProps {
    value?: string;
    name?: string;
    placeholder?: string;
    type?: TInputType;
    default?: boolean;
    border?: boolean;
    search?: boolean;

    onChange?(evt: any);
}
