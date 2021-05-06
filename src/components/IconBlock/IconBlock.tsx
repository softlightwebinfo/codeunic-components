// Generated with util/create-component.js
import React from "react";
import { IconBlockProps } from "./IconBlock.types";
import "./IconBlock.scss";
import { BEM } from "../../libs/BEM";

const IconBlock: React.FC<IconBlockProps> = (props) => {
    const bm = new BEM("IconBlock", {
        icon: !props.title && !props.isTitle,
        red: props.red,
        isTitle: props.isTitle
    });
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            {!props.isTitle && props.title}
            <div className={bm.Children("icon")}>
                {props.icon}
            </div>
            {props.isTitle && <p className={bm.Children("title")}>{props.title}</p>}
        </div>
    );
}

export default IconBlock;