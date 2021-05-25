// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { EOnClick } from "../../types/events.types";

export interface ChatContactProps extends IProps {
    onClick?(event: EOnClick);

    active?: boolean;
    avatar: string;
    title: string;
    message: string;
    time: string;
    messages: number;
    id: number;
}
