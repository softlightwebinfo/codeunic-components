// Generated with util/create-component.js
import { FormLabelProps } from "../FormLabel/FormLabel.types";
import { IProps } from "../../interfaces/IProps";

export interface InputFileProps extends IProps, FormLabelProps {
    onChange?(evt: any): void;

    value?: any;
    placeholder: string;
    subPlaceholder: string;
}
