// Generated with util/create-component.js
import React from "react";
import { WidgetStepProps } from "./WidgetStep.types";
import style from "./WidgetStep.scss";
import Widget from "../Widget/Widget";
import { BEM } from "../../libs/BEM";
import AvatarTitle from "../../components/AvatarTitle/AvatarTitle";

const WidgetStep: React.FC<WidgetStepProps> = (props) => {
    const bm = new BEM("WidgetStep", {
        default: props.default,
    }, style);
    bm.Append(props.className);
    return (
        <Widget default className={bm.toString()} style={props.style}>
            <AvatarTitle name={props.number} title={props.title}/>
            <p>{props.description}</p>
        </Widget>
    );
}

export default WidgetStep;