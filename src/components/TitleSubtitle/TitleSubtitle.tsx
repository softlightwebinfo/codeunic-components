// Generated with util/create-component.js
import React from "react";
import { TitleSubtitleProps } from "./TitleSubtitle.types";
import "./TitleSubtitle.scss";
import { BEM } from "../../libs/BEM";

const TitleSubtitle: React.FC<TitleSubtitleProps> = (props) => {
    const bm = new BEM("TitleSubtitle", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <h2>{props.title}</h2>
            <p>{props.subTitle}</p>
        </div>
    );
}

export default TitleSubtitle;