// Generated with util/create-component.js
import React from "react";
import { AvatarProps } from "./Avatar.types";
import Image from "../Image/Image";
import { BEM } from "../../libs/BEM";

const Avatar: React.FC<AvatarProps> = (props) => {
    const bm = new BEM("Avatar", {
        square: props.square,
        default: props.default,
        noImage: props.noImage,
    });
    bm.Append(props.className);
    return (
        <div onClick={props.onClick} className={bm.toString()} style={props.style}>
            {props.noImage ? (props.image) : (
                <Image src={props.image.toString()}/>
            )}
        </div>
    );
}

export default Avatar;