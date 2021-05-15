// Generated with util/create-component.js
import React from "react";
import { ToolbarProps } from "./Toolbar.types";
import { BEM } from "../../libs/BEM";

const Toolbar: React.FC<ToolbarProps> = (props) => {
    const bm = new BEM("Toolbar", {});
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>{props.children}</div>
    );
}

export default Toolbar;
