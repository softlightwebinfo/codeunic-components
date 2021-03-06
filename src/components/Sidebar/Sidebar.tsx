// Generated with util/create-component.js
import React from "react";
import { SidebarProps } from "./Sidebar.types";
import { BEM } from "../../libs/BEM";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar: React.FC<SidebarProps> = (props) => {
    const bm = new BEM("Sidebar", {
        open: props.open,
        close: !props.open,
    });
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            <div className={bm.Children("logo")}>
                <Logo onClick={props.onClickLogo} image={props.image} logo={props.logo}/>
                <FontAwesomeIcon onClick={() => props.onClickToggle(prv => !prv)} icon={faBars}/>
            </div>
            {props.children && (<div>{props.children}</div>)}
        </div>
    );
}

export default Sidebar;