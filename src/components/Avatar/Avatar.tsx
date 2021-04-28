// Generated with util/create-component.js
import React from "react";

import { AvatarProps } from "./Avatar.types";
import Image from "../Image/Image";
import "./Avatar.scss";
import { BEM } from "../../libs/BEM";

const Avatar: React.FC<AvatarProps> = (props ) => {
    const bm = new BEM("Avatar", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <Image src={props.image}/>
        </div>
    );
}

export default Avatar;