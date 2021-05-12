// Generated with util/create-component.js
import React from "react";
import { CallFooterProps } from "./CallFooter.types";
import style from "./CallFooter.scss";
import { BEM } from "../../libs/BEM";
import {
    faAngleUp,
    faClosedCaptioning,
    faDesktop,
    faMicrophone,
    faPhone,
    faVideo
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconBlock from "../IconBlock/IconBlock";

const CallFooter: React.FC<CallFooterProps> = (props) => {
    const bm = new BEM("CallFooter", {}, style);
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            <div className={bm.Children("left")}>
                <IconBlock title={"Meeting details"} icon={<FontAwesomeIcon icon={faAngleUp}/>}/>
            </div>
            <div className={bm.Children("center")}>
                <IconBlock icon={<FontAwesomeIcon icon={faMicrophone}/>}/>
                <IconBlock red icon={<FontAwesomeIcon icon={faPhone}/>}/>
                <IconBlock icon={<FontAwesomeIcon icon={faVideo}/>}/>
            </div>
            <div className={bm.Children("right")}>
                <IconBlock title={"Turn on captions"} red isTitle icon={<FontAwesomeIcon icon={faClosedCaptioning}/>}/>
                <IconBlock title={"Present now"} red isTitle icon={<FontAwesomeIcon icon={faDesktop}/>}/>
            </div>
        </div>
    );
}

export default CallFooter;