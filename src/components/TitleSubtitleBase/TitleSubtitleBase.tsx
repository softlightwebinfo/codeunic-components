// Generated with util/create-component.js
import React from "react";
import { TitleSubtitleBaseProps } from "./TitleSubtitleBase.types";
import { BEM } from "../../libs/BEM";

const TitleSubtitleBase: React.FC<TitleSubtitleBaseProps> = (props) => {
    const bm = new BEM("TitleSubtitleBase", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <div className={bm.Children("title")}>{props.title}</div>
            <div className={bm.Children("subTitle")}>{props.subTitle}</div>
        </div>
    );
}

export default TitleSubtitleBase;