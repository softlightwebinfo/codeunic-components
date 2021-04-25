// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { EItems } from "../../types/EItems";
import { EOnClick } from "../../types/events.types";

export interface CardTitleDetailProps extends IProps {
    title?: string;
    description?: string;
    list: EItems;
    buttonPlayText?: string;
    buttonDetailText?: string;
    buttonRightText?: string;

    onClickPlay?(evt: EOnClick);

    onClickDetail?(evt: EOnClick);
}
