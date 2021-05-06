// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactNode } from "react";

export interface WidgetStepProps extends IProps {
    title: string;
    number: string | ReactNode;
    description: string;
    default?: boolean;
}
