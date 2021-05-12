// Generated with util/create-component.js
import React from "react";
import { AvatarTitleProps } from "./AvatarTitle.types";
import style from "./AvatarTitle.scss";
import { BEM } from "../../libs/BEM";
import Round from "../Round/Round";

const AvatarTitle: React.FC<AvatarTitleProps> = (props) => {
    const bm = new BEM("AvatarTitle", {}, style);
    bm.Append(props.className);

    return (
        <div className={bm.toString()} style={props.style}>
            <Round>{props.name}</Round>
            <span>{props.title}</span>
        </div>
    );
}

export default AvatarTitle;