// Generated with util/create-component.js
import React from "react";
import { TabProps } from "./Tab.types";
import "./Tab.scss";
import { BEM } from "../../libs/BEM";

const Tab: React.FC<TabProps> = (props) => {
    const bm = new BEM("Tab", {
        active: props.active,
    });
    bm.Append(props.className);
    return (
        <div onClick={props.onClick} className={bm.toString()} style={props.style}>
            <div className={bm.Children("icon")}>{props.icon}</div>
            <p className={bm.Children("title")}>{props.title}</p>
        </div>
    );
}

export default Tab;