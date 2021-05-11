// Generated with util/create-component.js
import React from "react";
import { TitleSubtitleProps } from "./TitleSubtitle.types";
import "./TitleSubtitle.scss";
import { BEM } from "../../libs/BEM";

const TitleSubtitle: React.FC<TitleSubtitleProps> = (props) => {
    const bm = new BEM("TitleSubtitle", {
        center: props.center,
    });
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <h2>{props.title}</h2>
            <p>
                {props.subTitle.split("\n").map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </p>
            {props.children && <div>{props.children}</div>}
        </div>
    );
}

export default TitleSubtitle;