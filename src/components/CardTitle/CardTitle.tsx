// Generated with util/create-component.js
import React from "react";
import { CardTitleProps } from "./CardTitle.types";
import "./CardTitle.scss";
import { BEM } from "../../libs/BEM";

const CardTitle: React.FC<CardTitleProps> = (props) => {
    const bm = new BEM("CardTitle", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <h6>{props.title}</h6>
            <p>{props.subTitle}</p>
        </div>
    );
}

export default CardTitle;

