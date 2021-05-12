// Generated with util/create-component.js
import React from "react";

import { CardIconProps } from "./CardIcon.types";

import style from "./CardIcon.scss";
import { BEM } from "../../libs/BEM";

const CardIcon: React.FC<CardIconProps> = (props) => {
    const bm = new BEM("CardIcon", {}, style)
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            {props.icon}
        </div>
    );
}

export default CardIcon;

