// Generated with util/create-component.js
import { ReactElement, ReactNode } from "react";
import { EOnClick } from "../../types/events.types";

export interface ButtonProps {
    children?: ReactNode | ReactElement | string;
    default?: boolean;
    single?: boolean;

    onClick(evt: EOnClick): any;
}
