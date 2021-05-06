// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactNode } from "react";

export interface TabProps extends IProps {
    onClick?(evt: any): void;

    active?: boolean;
    icon: ReactNode;
    title: string;
}