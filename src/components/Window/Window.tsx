// Generated with util/create-component.js
import React from "react";
import { WindowProps } from "./Window.types";
import { BEM } from "../../libs/BEM";
import WindowHeader from "../WindowHeader/WindowHeader";

const Window: React.FC<WindowProps> = (props) => {
    const bm = new BEM("Window", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <WindowHeader/>
            <div className={bm.Children("content")}>
                {props.children}
            </div>
        </div>
    );
}

export default Window;