// Generated with util/create-component.js
import { ReactElement, ReactNode } from "react";
import { EOnClick } from "../../types/events.types";
import { IProps } from "../../interfaces/IProps";

export interface ButtonProps extends IProps {
    children?: ReactNode | ReactElement | string;
    default?: boolean;
    single?: boolean;

    onClick(evt: EOnClick): any;
}
