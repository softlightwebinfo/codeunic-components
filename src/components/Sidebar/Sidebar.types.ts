// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { EOnClick } from "../../types/events.types";

export interface SidebarProps extends IProps {
    onClickLogo?(evt: EOnClick);

    image?: string;
    logo?: string;
}
