// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactNode } from "react";

export interface AvatarHeaderProps extends IProps {
    default?: boolean;
    white?: boolean;
    avatar: string | ReactNode;
    title: string;
    subTitle?: string;
    noImage?: boolean;
}
