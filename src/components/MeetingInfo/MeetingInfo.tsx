// Generated with util/create-component.js
import React from "react";
import { MeetingInfoProps } from "./MeetingInfo.types";
import { BEM } from "../../libs/BEM";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderTimes from "../HeaderTimes/HeaderTimes";
import Button from "../Button/Button";
import TextInfo from "../TextInfo/TextInfo";
import MeetLink from "../MeetLink/MeetLink";
import PermissionText from "../PermissionText/PermissionText";
import TextSmall from "../TextSmall/TextSmall";

const MeetingInfo: React.FC<MeetingInfoProps> = (props) => {
    const bm = new BEM("MeetingInfo", {});
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            <HeaderTimes onClick={props.onClose} title={props.title}/>
            <Button onClick={props.onClick} className={bm.Children("people-btn")} theme={"secondary"}>
                <FontAwesomeIcon icon={faUser}/>
                Add Others
            </Button>
            <TextInfo
                className={bm.Children("info")}
                message={"Or share this meeting link with others you want in the meeting"}
            />
            <MeetLink
                className={bm.Children("meet")}
                title={props.meetLink ?? "Some random URL"}
                onClick={props.onClickMeetLink}
            />
            <PermissionText title={"People who use this meeting link must get your permission before they can join."}/>
            <TextSmall className={bm.Children("text")} title={props.textSmall ?? 'Joined as akshay@gmail.com'}/>
        </div>
    );
}

export default MeetingInfo;