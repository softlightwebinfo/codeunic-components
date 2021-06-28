// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactNode } from "react";
import { EOnClick } from "../../types/events.types";

export interface AvatarProps extends IProps {
    onClick?(evt: EOnClick);

    noImage?: boolean;
    square?: boolean;
    default?: boolean;
    image: string | ReactNode;
}
