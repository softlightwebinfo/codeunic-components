// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TInputType } from "../../types/TInputType";
import { FormLabelProps } from "../FormLabel/FormLabel.types";

export interface InputProps extends IProps, FormLabelProps {
    value?: string;
    placeholder?: string;
    type?: TInputType;

    onChange?(evt: any);
}
