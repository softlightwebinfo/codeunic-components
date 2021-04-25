// Generated with util/create-component.js
import React from "react";

import { SlickArrowProps } from "./SlickArrow.types";

import "./SlickArrow.scss";
import { BEM } from "../../libs/BEM";
import Arrow from "../Arrow/Arrow";

const SlickArrow: React.FC<SlickArrowProps> = (props) => {
    const {left} = props;
    const bm = new BEM("SlickArrow", {
        left
    });

    bm.Append(props.className);

    return (
        <div
            onClick={props.onClick}
            style={props.style}
            className={bm.toString()}
        >
            <Arrow className={bm.Children("arrow")}/>
        </div>
    );
}

export default SlickArrow;