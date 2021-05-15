// Generated with util/create-component.js
import React from "react";
import { ChatSectionProps } from "./ChatSection.types";
import { BEM } from "../../libs/BEM";
import ChatBlock from "../ChatBlock/ChatBlock";

const ChatSection: React.FC<ChatSectionProps> = (props) => {
    const bm = new BEM("ChatSection", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            {props.messages.map((msg, index) => (
                <ChatBlock {...msg} key={index}/>
            ))}
        </div>
    );
}

export default ChatSection;