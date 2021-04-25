// Generated with util/create-component.js
import React from "react";

import { VideoPremiumProps } from "./VideoPremium.types";

import "./VideoPremium.scss";
import { BEM } from "../../libs/BEM";
import Image from "../Image/Image";
import CardTitleDetail from "../CardTitleDetail/CardTitleDetail";

const VideoPremium: React.FC<VideoPremiumProps> = (props) => {
    const bm = new BEM("VideoPremium", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <CardTitleDetail {...props} className={bm.Children("detail")}/>
            <Image src={props.image} className={bm.Children("image")}/>
        </div>
    );
}

export default VideoPremium;