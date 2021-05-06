// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { EOnClick } from "../../types/events.types";
import { ReactNode } from "react";

export interface TitleCategoryProps extends IProps {
    right?: ReactNode;
    hiddenRight?: boolean;
    buttonText?: string;
    title: string;

    onClick?(evt: EOnClick);
}
