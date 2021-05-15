// Generated with util/create-component.js
import React from "react";
import { ContentProps } from "./Content.types";
import { BEM } from "../../libs/BEM";

const Content: React.FC<ContentProps> = (props) => {
    const bm = new BEM("Content", {});
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            {props.children}
        </div>
    );
}

export default Content;
