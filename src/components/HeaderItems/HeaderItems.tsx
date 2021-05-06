// Generated with util/create-component.js
import React from "react";
import { HeaderItemsProps } from "./HeaderItems.types";
import "./HeaderItems.scss";
import { BEM } from "../../libs/BEM";

const HeaderItems: React.FC<HeaderItemsProps> = (props) => {
    const bm = new BEM("HeaderItems", {
        date: props.date,
        icon: props.icon,
    });
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            {props.children}
        </div>
    );
}

export default HeaderItems;