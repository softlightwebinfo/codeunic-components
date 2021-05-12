// Generated with util/create-component.js
import React from "react";
import { NavbarProps } from "./Navbar.types";
import style from "./Navbar.scss";
import { BEM } from "../../libs/BEM";

const Navbar: React.FC<NavbarProps> = (props) => {
    const bm = new BEM("Navbar", {
        default: props.default,
    }, style);
    bm.Append(props.className);
    return (
        <div style={props.style} className={bm.toString()}>
            <nav>
                <div className={bm.Children("left")}>{props.left}</div>
                <div className={bm.Children("center")}>{props.center}</div>
                <div className={bm.Children("right")}>{props.right}</div>
            </nav>
        </div>
    );
}

export default Navbar;