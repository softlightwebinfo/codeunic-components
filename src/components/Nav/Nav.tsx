// Generated with util/create-component.js
import React from "react";

import { NavProps } from "./Nav.types";

import "./Nav.scss";
import { BEM } from "../../libs/BEM";

const Nav: React.FC<NavProps> = (props) => {
    const bm = new BEM("Nav", {});
    bm.Append(props.className);
    return (
        <nav className={bm.toString()}>
            {(props.links || []).map((item, index) => (
                <a href={item.url} key={index}>{item.label}</a>
            ))}
        </nav>
    );
}

export default Nav;