// Generated with util/create-component.js
import React from "react";
import { StepItemProps } from "./StepItem.types";
import "./StepItem.scss";
import { BEM } from "../../libs/BEM";

const StepItem: React.FC<StepItemProps> = (props) => {
    const bm = new BEM("StepItem", {
        inset: props.inset,
    });
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <div className={bm.Children("inside")}/>
        </div>
    );
}

export default StepItem;