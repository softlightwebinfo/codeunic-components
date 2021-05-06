// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ChatBlockProps } from "../ChatBlock/ChatBlock.types";
import { ChatSendMsgProps } from "../ChatSendMsg/ChatSendMsg.types";

export interface MessengerProps extends IProps {
    title: string;
    messages: ChatBlockProps[];
    sendMsg: ChatSendMsgProps;

    onClose(evt: any);
}
