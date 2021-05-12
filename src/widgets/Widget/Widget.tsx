// Generated with util/create-component.js
import React from "react";
import { WidgetProps } from "./Widget.types";
import style from "./Widget.scss";
import { BEM } from "../../libs/BEM";

const Widget: React.FC<WidgetProps> = (props) => {
    const bm = new BEM("Widget", {
        default: props.default,
    }, style);
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            {props.children}
        </div>
    );
}

export default Widget;