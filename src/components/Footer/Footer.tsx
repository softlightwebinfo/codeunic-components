// Generated with util/create-component.js
import React from "react";

import { FooterProps } from "./Footer.types";

import style from "./Footer.scss";
import { BEM } from "../../libs/BEM";

const Footer: React.FC<FooterProps> = (props) => {
    const bm = new BEM("Footer", {}, style);
    bm.Append(props.className);
    return (
        <footer className={bm.toString()} style={props.style}>
            {props.children}
        </footer>
    );
}

export default Footer;