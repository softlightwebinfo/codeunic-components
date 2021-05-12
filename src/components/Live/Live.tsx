// Generated with util/create-component.js
import React from "react";
import { LiveProps } from "./Live.types";
import style from "./Live.scss";
import { BEM } from "../../libs/BEM";
import Category from "../Category/Category";
import Badge from "../Badge/Badge";

const Live: React.FC<LiveProps> = (props) => {
    const bm = new BEM("Live", {
        live: props.live,
    }, style);
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <Category image={props.image} badge={`${props.viewers} viewes`}/>
            {props.live && <Badge className={bm.Children("live")} theme={"primary"} label={"EN DIRECTO"}/>}
            <h3 className={bm.Children("title")}>{props.title}</h3>
        </div>
    );
}

export default Live;