// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TTheme } from "../../types/TTheme";

export interface DetailWorkItemProps extends IProps {
    title: string;
    subTitle: string;
    label: string;
    date: string;
    labelTheme?: TTheme;
    borderBottom?: boolean;
}
