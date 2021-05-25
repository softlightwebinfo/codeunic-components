// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactNode } from "react";

export interface AvatarHeaderProps extends IProps {
    default?: boolean;
    white?: boolean;
    big?: boolean;
    avatar: string | ReactNode;
    title: string | ReactNode;
    subTitle?: string | ReactNode;
    top?: string;
    noImage?: boolean;
}
