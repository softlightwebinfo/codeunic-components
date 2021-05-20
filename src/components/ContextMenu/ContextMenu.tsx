// Generated with util/create-component.js
import React from "react";
import { ContextMenuProps } from "./ContextMenu.types";
import { BEM } from "../../libs/BEM";

const ContextMenu: React.FC<ContextMenuProps> = (props) => {
    const bm = new BEM("ContextMenu", {});
    bm.Append(props.className)
    return (
        <ul className={bm.toString()} style={props.style}>
            {props.menu.map((menu, index) => (
                <li className={bm.Children("item")} key={index}>
                    {menu.label}
                </li>
            ))}
        </ul>
    );
}

export default ContextMenu;