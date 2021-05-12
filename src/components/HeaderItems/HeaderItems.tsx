// Generated with util/create-component.js
import React from "react";
import { HeaderItemsProps } from "./HeaderItems.types";
import style from "./HeaderItems.scss";
import { BEM } from "../../libs/BEM";

const HeaderItems: React.FC<HeaderItemsProps> = (props) => {
    const bm = new BEM("HeaderItems", {
        date: props.date,
        icon: props.icon,
    }, style);
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            {props.children}
        </div>
    );
}

export default HeaderItems;