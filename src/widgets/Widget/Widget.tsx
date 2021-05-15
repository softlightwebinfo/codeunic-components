// Generated with util/create-component.js
import React from "react";
import { WidgetProps } from "./Widget.types";
import { BEM } from "../../libs/BEM";

const Widget: React.FC<WidgetProps> = (props) => {
    const bm = new BEM("Widget", {
        default: props.default,
    });
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            {props.children}
        </div>
    );
}

export default Widget;