// Generated with util/create-component.js
import React from "react";
import { PanelProps } from "./Panel.types";
import { BEM } from "../../libs/BEM";

const Panel: React.FC<PanelProps> = (props) => {
    const bm = new BEM("Panel", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <header>
                <h3>{props.title}</h3>
            </header>
            <section>{props.children}</section>
        </div>
    );
}

export default Panel;