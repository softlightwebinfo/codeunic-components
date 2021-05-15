// Generated with util/create-component.js
import React from "react";
import { MeetLinkProps } from "./MeetLink.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { BEM } from "../../libs/BEM";

const MeetLink: React.FC<MeetLinkProps> = (props) => {
    const bm = new BEM("MeetLink", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <span>{props.title}</span>
            <FontAwesomeIcon onClick={props.onClick} className={bm.Children("icon")} icon={faCopy}/>
        </div>
    );
}

export default MeetLink;