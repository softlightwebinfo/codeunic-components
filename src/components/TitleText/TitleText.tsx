// Generated with util/create-component.js
import React from "react";

import { TitleTextProps } from "./TitleText.types";

import style from "./TitleText.scss";
import { BEM } from "../../libs/BEM";

const TitleText: React.FC<TitleTextProps> = (props) => {
    const bm = new BEM("TitleText", {}, style);
    bm.Append(props.className);
    return (
        <h6
            style={props.style}
            className={bm.toString()}
        >
            {props.text}
        </h6>
    );
}

export default TitleText;

