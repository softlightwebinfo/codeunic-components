// Generated with util/create-component.js
import React from "react";
import { MessengerProps } from "./Messenger.types";
import "./Messenger.scss";
import { BEM } from "../../libs/BEM";
import HeaderTimes from "../HeaderTimes/HeaderTimes";
import Flyout from "../Flyout/Flyout";
import { faCommentAlt, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tabs from "../Tabs/Tabs";
import ChatSendMsg from "../ChatSendMsg/ChatSendMsg";
import ChatSection from "../ChatSection/ChatSection";

const Messenger: React.FC<MessengerProps> = (props) => {
    const bm = new BEM("Messenger", {});
    bm.Append(props.className)
    return (
        <Flyout onClose={props.onClose} className={bm.toString()} style={props.style}>
            <HeaderTimes className={bm.Children("header")} onClick={props.onClose} title={props.title}/>
            <Tabs
                active={1}
                tabs={[
                    {icon: <FontAwesomeIcon icon={faUserFriends}/>, title: "People (1)"},
                    {icon: <FontAwesomeIcon icon={faCommentAlt}/>, title: "Chat"},
                ]}
            >
                <div>People</div>
                <>
                    <ChatSection messages={props.messages}/>
                    <ChatSendMsg {...props.sendMsg}/>
                </>
            </Tabs>
        </Flyout>
    );
}

export default Messenger;