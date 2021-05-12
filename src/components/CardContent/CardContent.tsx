// Generated with util/create-component.js
import React from "react";
import { CardContentProps } from "./CardContent.types";
import style from "./CardContent.scss";
import { BEM } from "../../libs/BEM";

const CardContent: React.FC<CardContentProps> = (props) => {
    const bm = new BEM("CardContent", {}, style);
    bm.Append(props.className);
    return (
        <div className={bm.toString()}>
            {props.children}
        </div>
    );
}
export default CardContent;

