// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { EOnClick } from "../../types/events.types";

export interface TableColumnProps extends IProps {
    onClick?(event: EOnClick);

    isHeading?: boolean;
}
