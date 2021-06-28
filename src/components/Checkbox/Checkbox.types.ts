// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { FormLabelProps } from "../FormLabel/FormLabel.types";

export interface CheckboxProps extends IProps {
    defaultValue?: boolean;
    id?: string;
    label?: FormLabelProps;
    text: string;
    info?: string;
    value?: string;

    onChange?(event: any): void;
}
