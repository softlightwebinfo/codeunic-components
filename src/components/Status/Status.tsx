// Generated with util/create-component.js
import React from "react";
import { StatusProps } from "./Status.types";
import { BEM } from "../../libs/BEM";

const Status: React.FC<StatusProps> = (props) => {
    const bm = new BEM("Status", {
        active: props.active,
    });
    bm.Append(props.className)
    return (
        <span className={bm.toString()} style={props.style}>
            {props.children}
        </span>
    );
}

export default Status;