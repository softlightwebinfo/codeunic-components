// Generated with util/create-component.js
import React from "react";
import { LogoProps } from "./Logo.types";
import Image from "../Image/Image";
import { BEM } from "../../libs/BEM";

const Logo: React.FC<LogoProps> = (props) => {
    const bm = new BEM("Logo", {})
    bm.Append(props.className);
    return (
        <div onClick={props.onClick} className={bm.toString()} style={props.style}>
            {props.image && <Image src={props.image}/>}
            {props.logo && <span>{props.logo}</span>}
        </div>
    );
}

export default Logo;

