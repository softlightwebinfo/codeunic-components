// Generated with util/create-component.js
import React from "react";
import { CardImageProps } from "./CardImage.types";
import { BEM } from "../../libs/BEM";
import Image from '../Image/Image';

const CardImage: React.FC<CardImageProps> = (props) => {
    const bm = new BEM("CardImage", {});
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            <Image default src={props.image}/>
            <div className={bm.Children("content")}>
                {props.children}
            </div>
        </div>
    );
}

export default CardImage;