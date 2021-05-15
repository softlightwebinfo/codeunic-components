// Generated with util/create-component.js
import React from "react";
import { CardProps } from "./Card.types";
import { BEM } from "../../libs/BEM";

const Card: React.FC<CardProps> = (props) => {
    const bm = new BEM("Card", {
        default: props.default,
        around: props.around,
    });
    bm.Append(props.className);
    return (
        <div onClick={props.onClick} className={bm.toString()} style={props.style}>
            {props.image && (
                <img
                    className={bm.Children("image")}
                    src={props.image}
                    alt={props.imageAlt}
                    title={props.imageTitle}
                />
            )}
            {props.children}
        </div>
    );
}

export default Card;

