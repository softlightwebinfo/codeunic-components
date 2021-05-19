// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ButtonProps } from "../Button/Button.types";
import { AvatarHeaderProps } from "../AvatarHeader/AvatarHeader.types";

export interface CardArticleProps extends IProps {
    avatar: AvatarHeaderProps;
    buttons: ButtonProps[];
    image: string;
    category: string;
    title: string;
    subTitle: string;
}
