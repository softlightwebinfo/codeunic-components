// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactNode } from "react";

export interface CardSectionProps extends IProps {
    title: string;
    description: string;
    icon: ReactNode;

    onClickButton?(evt: any);
}
