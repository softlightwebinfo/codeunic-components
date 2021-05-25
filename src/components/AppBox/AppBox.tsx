// Generated with util/create-component.js
import React from "react";
import { AppBoxProps } from "./AppBox.types";
import { BEM } from "../../libs/BEM";

const AppBox: React.FC<AppBoxProps> = (props) => {
    const bm = new BEM("AppBox", {});
    bm.Append(props.className)
    return (
        <div data-testid="AppBox" className={bm.toString()} style={props.style}>
            <div className={bm.Children("content")}>{props.children}</div>
        </div>
    );
}

export default AppBox;

