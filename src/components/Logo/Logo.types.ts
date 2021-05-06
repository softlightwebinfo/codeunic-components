// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { EOnClick } from "../../types/events.types";

export interface LogoProps extends IProps {
    onClick?(evt: EOnClick);

    logo: string;
    image: string;
}
