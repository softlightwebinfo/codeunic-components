// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { EOnClick } from "../../types/events.types";

export interface MeetingInfoProps extends IProps {
    onClose(evt: any);
    onClickMeetLink(evt: any);
    onClick(evt: EOnClick);

    meetLink?: string;
    textSmall?: string;
    title: string;
}
