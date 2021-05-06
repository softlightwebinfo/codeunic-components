// Generated with util/create-component.js
import React from "react";
import { ChatSendMsgProps } from "./ChatSendMsg.types";
import "./ChatSendMsg.scss";
import { BEM } from "../../libs/BEM";
import Input from "../Input/Input";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChatSendMsg: React.FC<ChatSendMsgProps> = (props) => {
    const bm = new BEM("ChatSendMsg", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <Input placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>
            <FontAwesomeIcon className={bm.Children("icon")} icon={faPaperPlane} onClick={props.onClick}/>
        </div>
    );
}

export default ChatSendMsg;