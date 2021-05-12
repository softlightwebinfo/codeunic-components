// Generated with util/create-component.js
import React from "react";

import { LayoutCardVideoProps } from "./LayoutCardVideo.types";

import style from "./LayoutCardVideo.scss";
import Card from "../../components/Card/Card";
import CardTitleDescription from "../../components/CardTitleDescription/CardTitleDescription";
import { BEM } from "../../libs/BEM";

const LayoutCardVideo: React.FC<LayoutCardVideoProps> = (props) => {
    const bm = new BEM("LayoutCardVideo", {}, style);
    bm.Append(props.className);
    return (
        <Card
            style={props.style}
            className={bm.toString()}
            default
            image={props.image}
            imageAlt={props.title}
            imageTitle={props.title}
        >
            <CardTitleDescription
                description={props.description}
                title={props.title}
                label={props.label}
            />
        </Card>
    );
}

export default LayoutCardVideo;

