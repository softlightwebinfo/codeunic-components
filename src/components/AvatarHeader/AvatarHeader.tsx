// Generated with util/create-component.js
import React from "react";
import { AvatarHeaderProps } from "./AvatarHeader.types";
import Avatar from "../Avatar/Avatar";
import TextInfo from "../TextInfo/TextInfo";
import { BEM } from "../../libs/BEM";

const AvatarHeader: React.FC<AvatarHeaderProps> = (props) => {
    const bm = new BEM("AvatarHeader", {
        default: props.default,
        white: props.white,
        big: props.big,
    });
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <Avatar noImage={props.noImage} square image={props.avatar} default/>
            <div className={bm.Children("content")}>
                {props.top && <TextInfo message={props.top}/>}
                <span>{props.title}</span>
                {props.subTitle && <span>{props.subTitle}</span>}
            </div>
            {props.children && (<span>{props.children}</span>)}
        </div>
    );
}

export default AvatarHeader;