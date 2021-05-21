// Generated with util/create-component.js
import React from "react";
import { ProgressBarProps } from "./ProgressBar.types";
import { BEM } from "../../libs/BEM";

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
    const bm = new BEM("ProgressBar", {});
    bm.Append(props.className)
    return (
        <div data-testid="ProgressBar" className={bm.toString()} style={props.style}>
            <div className={bm.Children("bar")} style={{width: `${props.percentage}%`}}/>
        </div>
    );
}

export default ProgressBar;