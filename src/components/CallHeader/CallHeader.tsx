// Generated with util/create-component.js
import React from "react";
import { CallHeaderProps } from "./CallHeader.types";
import style from "./CallHeader.scss";
import { BEM } from "../../libs/BEM";
import HeaderItems from "../HeaderItems/HeaderItems";
import { faCommentAlt, faUserCircle, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AlertCircleIcon from "../AlertCircleIcon/AlertCircleIcon";

const CallHeader: React.FC<CallHeaderProps> = (props) => {
    const bm = new BEM("CallHeader", {}, style);
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            <HeaderItems>
                <FontAwesomeIcon icon={faUserFriends}/>
            </HeaderItems>
            <HeaderItems>
                <FontAwesomeIcon icon={faCommentAlt}/>
                <AlertCircleIcon/>
            </HeaderItems>
            <HeaderItems date>01:00 PM</HeaderItems>
            <HeaderItems icon>
                <FontAwesomeIcon icon={faUserCircle}/>
            </HeaderItems>
        </div>
    );
}

export default CallHeader;