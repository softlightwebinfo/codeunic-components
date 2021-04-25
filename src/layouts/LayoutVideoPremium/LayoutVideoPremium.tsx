// Generated with util/create-component.js
import React from "react";
import { LayoutVideoPremiumProps } from "./LayoutVideoPremium.types";
import "./LayoutVideoPremium.scss";
import { BEM } from "../../libs/BEM";
import Parallax from "../../components/Parallax/Parallax";
import { ContainerFluid } from "../../components";
import VideoPremium from "../../components/VideoPremium/VideoPremium";

const LayoutVideoPremium: React.FC<LayoutVideoPremiumProps> = (props) => {
    const bm = new BEM("LayoutVideoPremium", {})
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <Parallax image={props.image}>
                <ContainerFluid>
                    <VideoPremium {...props}/>
                </ContainerFluid>
            </Parallax>
        </div>
    );
}

export default LayoutVideoPremium;