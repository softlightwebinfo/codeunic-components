// Generated with util/create-component.js
import React, { useState } from "react";
import { DropdownProps } from "./Dropdown.types";
import { BEM } from "../../libs/BEM";
import ClickOutside from "../ClickOutside/ClickOutside";

const Dropdown: React.FC<DropdownProps> = (props) => {
    const [open, setOpen] = useState(false);
    const bm = new BEM("Dropdown", {});
    bm.Append(props.className);
    const onClose = () => setOpen(false);
    return (
        <ClickOutside onClick={onClose} className={bm.toString()} style={props.style}>
            <div onClick={() => setOpen(!open)} className={bm.Children("trigger")}>{props.trigger}</div>
            <div className={bm.Modifier("menu", "active", open)}>{props.menu}</div>
        </ClickOutside>
    );
}

export default Dropdown;