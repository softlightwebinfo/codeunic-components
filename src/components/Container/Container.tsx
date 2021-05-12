// Generated with util/create-component.js
import React from "react";
import { ContainerProps } from "./Container.types";
import style from "./Container.scss";
import { BEM } from "../../libs/BEM";

const Container: React.FC<ContainerProps> = (props) => {
    const bm = new BEM("Container", {}, style);
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>{props.children}</div>
    );
}

export default Container;