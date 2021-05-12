// Generated with util/create-component.js
import React from "react";
import { AlertCircleIconProps } from "./AlertCircleIcon.types";
import style from "./AlertCircleIcon.scss";
import { BEM } from "../../libs/BEM";

const AlertCircleIcon: React.FC<AlertCircleIconProps> = (props) => {
    const bm = new BEM("AlertCircleIcon", {}, style);
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}/>
    );
}

export default AlertCircleIcon;