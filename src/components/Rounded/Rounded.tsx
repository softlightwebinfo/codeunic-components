// Generated with util/create-component.js
import React from "react";
import { RoundedProps } from "./Rounded.types";
import { BEM } from "../../libs/BEM";

const Rounded: React.FC<RoundedProps> = (props) => {
    const bm = new BEM("Rounded", {
        [props.theme]: !!props.theme,
    });
    bm.Append(props.className)
    return (
        <div onClick={props.onClick} className={bm.toString()} style={props.style}/>
    );
}

export default Rounded;