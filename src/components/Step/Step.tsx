// Generated with util/create-component.js
import React from "react";
import { StepProps } from "./Step.types";
import style from "./Step.scss";
import { BEM } from "../../libs/BEM";
import StepItem from "../StepItem/StepItem";
import Badge from "../Badge/Badge";

const Step: React.FC<StepProps> = (props) => {
    const bm = new BEM("Step", {
        inset: props.inset,
    }, style)
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <StepItem inset={props.inset}/>
            <div className={bm.Children("badge")}>
                <Badge label={props.badge}/>
            </div>
            <div className={bm.Children("content")}>
                {props.children}
            </div>
        </div>
    );
}

export default Step;