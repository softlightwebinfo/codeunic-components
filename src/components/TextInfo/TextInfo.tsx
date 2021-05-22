// Generated with util/create-component.js
import React from "react";
import { TextInfoProps } from "./TextInfo.types";
import { BEM } from "../../libs/BEM";

const TextInfo: React.FC<TextInfoProps> = (props) => {
    const bm = new BEM("TextInfo", {
        [props.theme]: !!props.theme
    });
    bm.Append(props.className);
    return (
        <p onClick={props.onClick} className={bm.toString()} style={props.style}>{props.message}</p>
    );
}

export default TextInfo;