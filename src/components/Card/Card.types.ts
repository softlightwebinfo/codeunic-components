// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { EOnClick } from "../../types/events.types";

export interface CardProps extends IProps {
    onClick?(event: EOnClick);

    around?: boolean;
    default?: boolean;
    image?: string;
    imageAlt?: string;
    imageTitle?: string;
}
