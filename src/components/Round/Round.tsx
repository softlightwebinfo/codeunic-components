// Generated with util/create-component.js
import React from "react";
import { RoundProps } from "./Round.types";
import { BEM } from "../../libs/BEM";

const Round: React.FC<RoundProps> = (props) => {
    const bm = new BEM("Round", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            {props.children}
        </div>
    );
}

export default Round;

