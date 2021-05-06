// Generated with util/create-component.js
import React from "react";
import { ViewCallVideoProps } from "./ViewCallVideo.types";
import "./ViewCallVideo.scss";
import { BEM } from "../../libs/BEM";
import Messenger from "../../components/Messenger/Messenger";
import MeetingInfo from "../../components/MeetingInfo/MeetingInfo";
import CallFooter from "../../components/CallFooter/CallFooter";
import CallHeader from "../../components/CallHeader/CallHeader";

const ViewCallVideo: React.FC<ViewCallVideoProps> = (props) => {
    const bm = new BEM("ViewCallVideo", {});
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            <video id={"video"} className={bm.Children("video")} src={""} controls/>
            <CallHeader className={bm.Children("header")}/>
            <CallFooter className={bm.Children("footer")}/>
            {props.meeting.show && (
                <MeetingInfo className={bm.Children("info")} {...props.meeting}/>
            )}
            <Messenger {...props.messenger} className={bm.Children("messenger")}/>
        </div>
    );
}

export default ViewCallVideo;