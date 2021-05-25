// Generated with util/create-component.js
import React from "react";
import { ChatContactProps } from "./ChatContact.types";
import { BEM } from "../../libs/BEM";
import AvatarHeader from "../AvatarHeader/AvatarHeader";
import Badge from "../Badge/Badge";
import TextInfo from "../TextInfo/TextInfo";

const ChatContact: React.FC<ChatContactProps> = (props) => {
    const bm = new BEM("ChatContact", {
        active: props.active,
    });
    bm.Append(props.className)
    return (
        <div onClick={props.onClick} data-testid="ChatContact" className={bm.toString()} style={props.style}>
            <AvatarHeader
                white
                avatar={props.avatar}
                title={(
                    <div className={bm.Children("title")}>
                        {props.title}
                        <TextInfo message={props.time}/>
                    </div>
                )}
                subTitle={(
                    <div className={bm.Children("subTitle")}>
                        {props.message}
                        <Badge label={props.messages.toString()}/>
                    </div>
                )}/>
        </div>
    );
}

export default ChatContact;