// Generated with util/create-component.js
import React from "react";
import { ImageProps } from "./Image.types";
import { BEM } from "../../libs/BEM";

const Image: React.FC<ImageProps> = (props) => {
    const bm = new BEM("Image", {
        default: props.default,
    });
    bm.Append(props.className);
    return (
        <picture className={bm.toString()} style={props.style}>
            <img src={props.src} alt={props.alt ?? props.title} title={props.title}/>
        </picture>
    );
}

export default Image;