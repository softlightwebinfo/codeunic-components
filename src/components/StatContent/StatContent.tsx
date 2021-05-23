// Generated with util/create-component.js
import React from "react";
import { StatContentProps } from "./StatContent.types";
import { BEM } from "../../libs/BEM";

const StatContent: React.FC<StatContentProps> = (props) => {
    const bm = new BEM("StatContent", {});
    bm.Append(props.className)
    return (
        <div data-testid="StatContent" className={bm.toString()} style={props.style}>
            {props.top && <p className={bm.Children("top")}>{props.top}</p>}
            <p className={bm.Children("title")}>{props.title}</p>
            {props.bottom && <p className={bm.Children("bottom")}>{props.bottom}</p>}
        </div>
    );
}

export default StatContent;