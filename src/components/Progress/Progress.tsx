// Generated with util/create-component.js
import React from "react";
import { ProgressProps } from "./Progress.types";
import { BEM } from "../../libs/BEM";
import ProgressBar from "../ProgressBar/ProgressBar";
import Badge from "../Badge/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Progress: React.FC<ProgressProps> = (props) => {
    const bm = new BEM("Progress", {});
    bm.Append(props.className)
    return (
        <div data-testid="Progress" className={bm.toString()} style={props.style}>
            <div>
                <span><FontAwesomeIcon icon={faTimesCircle}/>{props.title}</span>
                <Badge theme={props.labelTheme} label={props.label}/>
            </div>
            <ProgressBar percentage={props.percentage}/>
        </div>
    );
}

export default Progress;