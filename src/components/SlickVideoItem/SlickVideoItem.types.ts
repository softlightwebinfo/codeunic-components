// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { SlickItemProps } from "../SlickItem/SlickItem.types";
import { EItems } from "../../types/EItems";
import { EOnClick } from "../../types/events.types";

export interface SlickVideoItemProps extends IProps, SlickItemProps {
    list: EItems;
    buttonPlayText?: string;
    buttonDetailText?: string;
    buttonRightText?: string;

    onClickDetail?(evt: EOnClick);
}
