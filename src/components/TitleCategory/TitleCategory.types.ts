// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { EOnClick } from "../../types/events.types";

export interface TitleCategoryProps extends IProps {
    buttonText?: string;
    title: string;

    onClick?(evt: EOnClick);
}
