// Generated with util/create-component.js
import React from "react";
import { CardHeaderProps } from "./CardHeader.types";
import "./CardHeader.scss";
import { BEM } from "../../libs/BEM";

const CardHeader: React.FC<CardHeaderProps> = (props) => {
    const bm = new BEM("CardHeader", {});
    bm.Append(props.className);
    return (
        <header className={bm.toString()}>
            <h5>{props.title}</h5>
            <span>{props.subTitle}</span>
        </header>
    );
}

export default CardHeader;

