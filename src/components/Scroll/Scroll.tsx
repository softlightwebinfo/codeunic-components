// Generated with util/create-component.js
import React from "react";
import { ScrollProps } from "./Scroll.types";
import { BEM } from "../../libs/BEM";

const Scroll: React.FC<ScrollProps> = (props) => {
    const bm = new BEM("Scroll", {});
    return (
        <div data-testid="Scroll" className={bm.toString()} style={props.style}>
            <div className={bm.Children("content", props.className)}>
                {props.children}
            </div>
        </div>
    );
}

export default Scroll;
