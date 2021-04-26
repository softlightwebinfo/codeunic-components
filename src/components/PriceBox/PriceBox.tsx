// Generated with util/create-component.js
import React from "react";
import { PriceBoxProps } from "./PriceBox.types";
import "./PriceBox.scss";
import { BEM } from "../../libs/BEM";

const PriceBox: React.FC<PriceBoxProps> = (props) => {
    const bm = new BEM("PriceBox", {
        active: props.active,
    });
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <h3>
                <b>{props.price}</b>
                <span>{props.currency}</span>
                <small>/ {props.type}</small>
            </h3>
            <span>{props.title}</span>
        </div>
    );
}

export default PriceBox;
