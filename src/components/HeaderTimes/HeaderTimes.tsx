// Generated with util/create-component.js
import React from "react";
import { HeaderTimesProps } from "./HeaderTimes.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { BEM } from "../../libs/BEM";

const HeaderTimes: React.FC<HeaderTimesProps> = (props) => {
    const bm = new BEM("HeaderTimes", {
        padding: props.padding,
        default: props.default,
    });
    bm.Append(props.className)
    return (
        <header className={bm.toString()} style={props.style}>
            <h3>{props.title}</h3>
            <FontAwesomeIcon onClick={props.onClick} className={bm.Children("icon")} icon={faTimes}/>
        </header>
    );
}

export default HeaderTimes;