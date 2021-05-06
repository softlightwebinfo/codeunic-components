// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { MessengerProps } from "../../components/Messenger/Messenger.types";
import { MeetingInfoProps } from "../../components/MeetingInfo/MeetingInfo.types";

export interface ViewCallVideoProps extends IProps {
    meeting: MeetingInfoProps & { show?: boolean };
    messenger: MessengerProps;
}