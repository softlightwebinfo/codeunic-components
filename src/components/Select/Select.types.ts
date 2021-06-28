// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { FormLabelProps } from "../FormLabel/FormLabel.types";

export interface SelectProps extends IProps {
    onChange?(event: any): void;

    value?: string;
    id?: string;
    label?: FormLabelProps;
    options: ISelectOption[];
}

export interface ISelectOption {
    label: string;
    value: string;
}