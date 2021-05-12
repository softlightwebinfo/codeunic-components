// Generated with util/create-component.js
import React from "react";
import { RoundProps } from "./Round.types";
import style from "./Round.scss";
import { BEM } from "../../libs/BEM";

const Round: React.FC<RoundProps> = (props) => {
    const bm = new BEM("Round", {}, style);
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            {props.children}
        </div>
    );
}

export default Round;

