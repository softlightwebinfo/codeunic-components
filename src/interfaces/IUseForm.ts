import { TInputType } from "../types/TInputType";

export interface IUseForm {
    type?: TInputType;
    value?: string;
    defaultValue?: string | boolean;
    id?: string;

    onChange?(e);
}