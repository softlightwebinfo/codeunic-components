// Generated with util/create-component.js
import React from "react";
import { MenuProps } from "./Menu.types";
import "./Menu.scss";
import { BEM } from "../../libs/BEM";

const Menu: React.FC<MenuProps> = (props) => {
    const bm = new BEM("Menu", {
        horizontal: props.horizontal,
    });
    bm.Append(props.className)
    return (
        <ul
            className={bm.toString()}
            style={props.style}
        >
            {Object.entries(props.menu ?? {}).map(([key, item]) => {
                const component = <div className={bm.Modifier("element", "icon", !item.label && !!item.icon)}>
                    <span className={bm.Children("icon")}>{item.icon}</span>
                    {item.label}
                    {item.menu && <Menu menu={item.menu ?? {}}/>}
                </div>
                return (
                    <li key={key} className={bm.Children("item")}>
                        {props.component?.(component, {
                            key,
                            ...item
                        }) ?? component}
                    </li>
                )
            })}
        </ul>
    );
}

export default Menu;