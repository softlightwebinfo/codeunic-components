// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { EOnClick } from "../../types/events.types";

export interface NoteProps extends IProps {
    onClose?(evt: EOnClick);
    onClick?(evt: EOnClick);

    id: number;
    title: string
    description: string;
}
