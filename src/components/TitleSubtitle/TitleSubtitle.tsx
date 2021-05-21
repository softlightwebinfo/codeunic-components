// Generated with util/create-component.js
import React from "react";
import { TitleSubtitleProps } from "./TitleSubtitle.types";
import { BEM } from "../../libs/BEM";

const TitleSubtitle: React.FC<TitleSubtitleProps> = (props) => {
    const bm = new BEM("TitleSubtitle", {
        center: props.center,
        group: props.group,
        default: props.default,
    });
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <h2>{props.title}</h2>
            <div>
                {typeof props.subTitle === "string" ? props.subTitle.split("\n").map((item, index) => (
                    <p key={index}>{item}</p>
                )) : props.subTitle}
            </div>
            {props.children && <div>{props.children}</div>}
        </div>
    );
}

export default TitleSubtitle;