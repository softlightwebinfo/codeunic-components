// Generated with util/create-component.js
import React from "react";
import { TextSmallProps } from "./TextSmall.types";
import style from "./TextSmall.scss";
import { BEM } from "../../libs/BEM";

const TextSmall: React.FC<TextSmallProps> = (props) => {
    const bm = new BEM("TextSmall", {}, style);
    bm.Append(props.className)
    return (
        <p className={bm.toString()} style={props.style}>{props.title}</p>
    );
}

export default TextSmall;