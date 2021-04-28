// Generated with util/create-component.js
import React from "react";
import { FooterCopyrightProps } from "./FooterCopyright.types";
import "./FooterCopyright.scss";
import { BEM } from "../../libs/BEM";
import Nav from "../Nav/Nav";
import { year } from "../../libs/functions";

const FooterCopyright: React.FC<FooterCopyrightProps> = (props) => {
    const bm = new BEM("FooterCopyright", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <div>
                &copy; {props.left.name}, {year()}, creado por <a href={props.left.url}>{props.left.by}</a>
            </div>
            <Nav links={props.right} className={bm.Children("right")}/>
        </div>
    );
}

export default FooterCopyright;

