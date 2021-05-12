// Generated with util/create-component.js
import React from "react";
import { CardHeaderProps } from "./CardHeader.types";
import style from "./CardHeader.scss";
import { BEM } from "../../libs/BEM";
import Badge from "../Badge/Badge";

const CardHeader: React.FC<CardHeaderProps> = (props) => {
    const bm = new BEM("CardHeader", {}, style);
    bm.Append(props.className);
    return (
        <header className={bm.toString()}>
            <h5>
                {props.title}
                {props.badge && <Badge theme={"dark"} label={props.badge}/>}
            </h5>
            <span>{props.subTitle}</span>
        </header>
    );
}

export default CardHeader;

