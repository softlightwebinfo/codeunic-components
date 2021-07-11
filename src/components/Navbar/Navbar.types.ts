// Generated with util/create-component.js
import {IProps} from "../../interfaces/IProps";
import {ReactNode} from "react";
import {EOnClick} from "../../types/events.types";

export interface NavbarProps extends IProps {
    onClickToggle?(event: EOnClick);

    title?: string | ReactNode;
    isToggle?: boolean;
    borderBottom?: boolean;
    white?: boolean;
    fixed?: boolean;
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
}
