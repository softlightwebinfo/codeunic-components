// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ButtonProps } from "../Button/Button.types";
import { EOnClick } from "../../types/events.types";

export interface CommentProps extends IProps {
    isQuote?: boolean;
    isAnswer?: boolean;
    header: {
        avatar: string;
        title: string;
        subTitle: string;
    },
    content: {
        message?: string;
        quote?: string;
    };
    footer: {
        likes: number;
        dislikes: number;
        buttons: ButtonProps[];
        onClickLike(evt: EOnClick);
        onClickDisLike(evt: EOnClick);
    },
}