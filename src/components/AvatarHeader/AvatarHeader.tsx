// Generated with util/create-component.js
import React from "react";
import { AvatarHeaderProps } from "./AvatarHeader.types";
import { BEM } from "../../libs/BEM";
import Avatar from "../Avatar/Avatar";

const AvatarHeader: React.FC<AvatarHeaderProps> = (props) => {
    const bm = new BEM("AvatarHeader", {
        default: props.default,
        white: props.white,
    });
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <Avatar noImage={props.noImage} square image={props.avatar} default/>
            <span>{props.title}</span>
            {props.subTitle && <span>{props.subTitle}</span>}
        </div>
    );
}

export default AvatarHeader;