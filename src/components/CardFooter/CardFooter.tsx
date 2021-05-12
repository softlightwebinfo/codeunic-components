// Generated with util/create-component.js
import React from "react";
import { CardFooterProps } from "./CardFooter.types";
import style from "./CardFooter.scss";
import { BEM } from "../../libs/BEM";

const CardFooter: React.FC<CardFooterProps> = (props ) => {
    const bm = new BEM("CardFooter", {}, style);
    bm.Append(props.className);
    return(
        <footer className={bm.toString()} style={props.style}>
            {props.children}
        </footer>
    );
}

export default CardFooter;