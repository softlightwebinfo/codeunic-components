// Generated with util/create-component.js
import React from "react";
import { WindowHeaderProps } from "./WindowHeader.types";
import { BEM } from "../../libs/BEM";
import Rounded from "../Rounded/Rounded";

const WindowHeader: React.FC<WindowHeaderProps> = (props) => {
    const bm = new BEM("WindowHeader", {});
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            <div className={bm.Children("left")}>
                <Rounded theme={"danger"}/>
                <Rounded theme={"warning"}/>
                <Rounded theme={"success"}/>
            </div>
        </div>
    );
}

export default WindowHeader;