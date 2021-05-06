// Generated with util/create-component.js
import React, { useEffect, useState } from "react";
import { TabsProps } from "./Tabs.types";
import "./Tabs.scss";
import { BEM } from "../../libs/BEM";
import Tab from "../Tab/Tab";

const Tabs: React.FC<TabsProps> = (props) => {
    const [active, setActive] = useState(props.active);
    const bm = new BEM("Tabs", {});
    bm.Append(props.className);

    const onClick = (index, tab) => {
        setActive(index);
        props.onClick?.(index, tab);
    }

    useEffect(() => {
        if (props.active != active) {
            setActive(props.active);
        }
    }, [props.active])

    return (
        <>
            <div className={bm.toString()} style={props.style}>
                {props.tabs.map((tab, index) => (
                    <Tab active={index === active} onClick={() => onClick(index, tab)} {...tab} key={index}/>
                ))}
            </div>
            {props.children && React.Children.map(props.children, (child, index) => {
                return index !== active ? null : child;
            })}
        </>
    );
}

export default Tabs;