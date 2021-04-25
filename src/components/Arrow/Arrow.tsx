// Generated with util/create-component.js
import React from "react";

import { ArrowProps } from "./Arrow.types";

import "./Arrow.scss";
import { BEM } from "../../libs/BEM";

const Arrow: React.FC<ArrowProps> = (props) => {
    const bm = new BEM("Arrow", {})
    bm.Append(props.className);
    return (
        <i style={props.style} className={bm.toString()}/>
    );
}

export default Arrow;

