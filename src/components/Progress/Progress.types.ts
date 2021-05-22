// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TTheme } from "../../types/TTheme";
import { ReactNode } from "react";

export interface ProgressProps extends IProps {
    labelTheme?: TTheme;
    percentage: number;
    label: string;
    title: string;
    icon?: ReactNode;
}
