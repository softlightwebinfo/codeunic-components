// Generated with util/create-component.js
import React, { useState } from "react";

import { DropdownProps } from "./Dropdown.types";

import "./Dropdown.scss";
import { BEM } from "../../libs/BEM";

const Dropdown: React.FC<DropdownProps> = (props) => {
    const [open, setOpen] = useState(false);
    const bm = new BEM("Dropdown", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <div onClick={() => setOpen(!open)} className={bm.Children("trigger")}>{props.trigger}</div>
            <div className={bm.Modifier("menu", "active", open)}>{props.menu}</div>
        </div>
    );
}

export default Dropdown;