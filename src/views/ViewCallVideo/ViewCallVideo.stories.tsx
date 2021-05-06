// Generated with util/create-component.js
import React from "react";
import ViewCallVideo from "./ViewCallVideo";
import { EOnClick } from "../../types/events.types";

export default {
    title: "Views/ViewCallVideo"
};

export const Default = () => <ViewCallVideo
    meeting={{
        onClickMeetLink(evt: any) {
        },
        show: true,
        onClick(evt: EOnClick) {
        },
        onClose(evt: any) {
        },
        meetLink: "Some random URL",
        textSmall: "Joined as akshay@gmail.com",
        title: "Your meeting's ready"
    }}
    messenger={{
        onClose(evt: any) {
        },
        title: "Meeting Details",
        messages: [
            {message: "Here comes a actual msg", sender: "you", date: "10 PM"},
            {message: "Here comes a actual msg", sender: "you", date: "10 PM"},
            {message: "Here comes a actual msg", sender: "you", date: "10 PM"},
        ],
        sendMsg: {
            placeholder: "Send a message to everyone",
            onClick(evt: any) {
            },
            onChange(evt: any) {
            },
            value: "",
        }
    }}
/>;