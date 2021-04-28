// Generated with util/create-component.js
import React from "react";
import { MenuProps } from "./Menu.types";
import "./Menu.scss";
import { BEM } from "../../libs/BEM";

const Menu: React.FC<MenuProps> = (props) => {
    const bm = new BEM("Menu", {});
    bm.Append(props.className)
    return (
        <ul
            className={bm.toString()}
            style={props.style}
        >
            {Object.entries(props.menu).map(([key, item]) => (
                <li key={key} className={bm.Children("item")}>
                    <a>
                        <span className={bm.Children("icon")}>{item.icon}</span>
                        {item.label}
                        {item.menu && <Menu menu={item.menu}/>}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Menu;

