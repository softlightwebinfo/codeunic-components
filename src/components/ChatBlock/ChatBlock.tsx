// Generated with util/create-component.js
import React from "react";
import { ChatBlockProps } from "./ChatBlock.types";
import style from "./ChatBlock.scss";
import { BEM } from "../../libs/BEM";

const ChatBlock: React.FC<ChatBlockProps> = (props) => {
    const bm = new BEM("ChatBlock", {}, style);
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <div className={bm.Children("sender")}>
                {props.sender}
                <small>{props.date}</small>
            </div>
            <p className={bm.Children("message")}>{props.message}</p>
        </div>
    );
}

export default ChatBlock;