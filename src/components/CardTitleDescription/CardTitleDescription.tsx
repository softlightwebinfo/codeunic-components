// Generated with util/create-component.js
import React from "react";

import { CardTitleDescriptionProps } from "./CardTitleDescription.types";

import style from "./CardTitleDescription.scss";
import Badge from "../Badge/Badge";
import { BEM } from "../../libs/BEM";

const CardTitleDescription: React.FC<CardTitleDescriptionProps> = (props) => {
    const bm = new BEM("CardTitleDescription", {}, style);
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <h6>{props.title}</h6>
            <div>
                {props.label && <Badge radius={false} theme={"secondary"} label={props.label}/>}
                <span>{props.description}</span>
            </div>
        </div>
    );
}

export default CardTitleDescription;

