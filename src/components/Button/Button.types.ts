// Generated with util/create-component.js
import { ReactElement, ReactNode } from "react";
import { EOnClick } from "../../types/events.types";
import { IProps } from "../../interfaces/IProps";
import { TButtonType } from "../../types/TButtonType";
import { TTheme } from "../../types/TTheme";

export interface ButtonProps extends IProps {
    theme?: TTheme;
    children?: ReactNode | ReactElement | string;
    default?: boolean;
    original?: boolean;
    single?: boolean;
    dark?: boolean;
    block?: boolean;
    type?: TButtonType;

    onClick?(evt: EOnClick): any;
}
