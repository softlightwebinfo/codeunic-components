// Generated with util/create-component.js
import React from "react";
import { NavbarProps } from "./Navbar.types";
import { BEM } from "../../libs/BEM";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC<NavbarProps> = (props) => {
    const {fixed = true} = props;
    const bm = new BEM("Navbar", {
        default: props.default,
        white: props.white,
        isToggle: props.isToggle,
        borderBottom: props.borderBottom,
        fixed
    });
    bm.Append(props.className);
    return (
        <div style={props.style} className={bm.toString()}>
            <nav>
                <div className={bm.Children("left")}>
                    {props.isToggle && <Button onClick={props.onClickToggle}><FontAwesomeIcon icon={faBars}/></Button>}
                    {props.title && <b className={bm.Children("title")}>{props.title}</b>}
                    {props.left}
                </div>
                <div className={bm.Children("center")}>{props.center}</div>
                <div className={bm.Children("right")}>{props.right}</div>
            </nav>
        </div>
    );
}

export default Navbar;