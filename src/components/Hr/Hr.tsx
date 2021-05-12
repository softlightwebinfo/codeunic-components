// Generated with util/create-component.js
import React from "react";
import { HrProps } from "./Hr.types";
import style from "./Hr.scss";
import { BEM } from "../../libs/BEM";

const Hr: React.FC<HrProps> = (props) => {
    const bm = new BEM("Hr", {}, style);
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}/>
    );
}

export default Hr;