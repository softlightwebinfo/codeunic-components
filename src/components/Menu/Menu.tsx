// Generated with util/create-component.js
import React, { useCallback, useState } from "react";
import { MenuProps } from "./Menu.types";
import { BEM } from "../../libs/BEM";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu: React.FC<MenuProps> = (props) => {
    const [state, setState] = useState({});
    const bm = new BEM("Menu", {
        horizontal: props.horizontal,
    });
    bm.Append(props.className);

    const onClick = useCallback((key) => (e) => {
        e.preventDefault();
        e.stopPropagation();
        setState(e => ({
            [key]: !e[key]
        }));
    }, []);

    return (
        <ul
            className={bm.toString()}
            style={props.style}
        >
            {Object.entries(props.menu ?? {}).map(([key, item]) => {
                const component = <div className={bm.Modifier("element", "icon", !item.label && !!item.icon)}>
                    <div onClick={onClick(key)}>
                        <span className={bm.Children("icon")}>{item.icon}</span>
                        {item.label}
                        {item.menu && (
                            <FontAwesomeIcon
                                className={bm.Children("angle")}
                                icon={!state[key] ? faAngleDown : faAngleUp}
                            />
                        )}
                    </div>
                    {(item.menu && state[key]) && <Menu menu={item.menu ?? {}}/>}
                </div>
                return (
                    <li key={key} className={bm.Modifier("item", "active", state[key])}>
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