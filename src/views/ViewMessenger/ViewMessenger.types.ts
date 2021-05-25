// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { AvatarHeaderProps } from "../../components/AvatarHeader/AvatarHeader.types";
import { ChatContactProps } from "../../components/ChatContact/ChatContact.types";
import { MessageProps } from "../../components/Message/Message.types";

export interface ViewMessengerProps extends IProps {
    user: AvatarHeaderProps;
    chats: ChatContactProps[];
    contacts: ChatContactProps[];
    userFrom: number;
    messages: MessageProps[];

    onSendMessage?(message: string, active: ChatContactProps): void;
}
