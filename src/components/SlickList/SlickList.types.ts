// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { SlickItemProps } from "../SlickItem/SlickItem.types";
import { ReactNode } from "react";

export interface SlickListProps extends IProps {
    isDetail?: boolean;
    data: SlickListPropsData;
    active: number;
    col?: number;
    component?: ReactNode;
}

export type SlickListPropsData = SlickItemProps[];
