// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactNode } from "react";

export interface WidgetStatProps extends IProps {
    text: string;
    textSecondary?: number;
    title: string;
    color?: string;
    icon?: ReactNode | string;
    isUp?: boolean;
}
