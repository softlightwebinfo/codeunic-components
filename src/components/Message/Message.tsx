// Generated with util/create-component.js
import React from "react";
import { MessageProps } from "./Message.types";
import { BEM } from "../../libs/BEM";
import Avatar from "../Avatar/Avatar";

const Message: React.FC<MessageProps> = (props) => {
    const bm = new BEM("Message", {
        isFrom: props.isFrom,
    });
    bm.Append(props.className)
    return (
        <div data-testid="Message" className={bm.toString()} style={props.style}>
            {!props.isFrom && (
                <Avatar image={props.avatar}/>
            )}
            <div className={bm.Children("content")}>
                <p>{props.message}</p>
                <span>{props.date}</span>
            </div>
        </div>
    );
}

export default Message;