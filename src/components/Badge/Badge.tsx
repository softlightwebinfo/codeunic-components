// Generated with util/create-component.js
import React from "react";

import { BadgeProps } from "./Badge.types";

import "./Badge.scss";
import { BEM } from "../../libs/BEM";

const Badge: React.FC<BadgeProps> = (props) => {
    const {radius = true} = props;
    const bm = new BEM("Badge", {
        [props.theme]: !!props.theme,
        radius: radius,
        "no-radius": !radius,
    });
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <span>{props.label}</span>
        </div>
    );
}

export default Badge;

