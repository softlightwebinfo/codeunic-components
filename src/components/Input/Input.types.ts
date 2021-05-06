// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TInputType } from "../../types/TInputType";

export interface InputProps extends IProps {
    value?: string;
    placeholder?: string;
    type?: TInputType;

    onChange?(evt: any);
}
