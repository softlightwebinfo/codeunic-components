// Generated with util/create-component.js
import React from "react";
import { CardContentProps } from "./CardContent.types";
import "./CardContent.scss";
import { BEM } from "../../libs/BEM";

const CardContent: React.FC<CardContentProps> = (props) => {
    const bm = new BEM("CardContent", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()}>
            {props.children}
        </div>
    );
}
export default CardContent;

