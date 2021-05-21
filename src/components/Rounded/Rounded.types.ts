// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TTheme } from "../../types/TTheme";
import { EOnClick } from "../../types/events.types";

export interface RoundedProps extends IProps {
    onClick?(event: EOnClick);

    theme: TTheme;
}
