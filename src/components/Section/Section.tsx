// Generated with util/create-component.js
import React from "react";
import { SectionProps } from "./Section.types";
import style from "./Section.scss";
import { BEM } from "../../libs/BEM";

const Section: React.FC<SectionProps> = (props) => {
    const bm = new BEM("Section", {}, style);
    bm.Append(props.className);
    return (
        <section className={bm.toString()} style={props.style}>
            <div
                className={bm.Children("image")}
                style={{background: `url(${props.image}) center top / cover no-repeat`}}
            />
            <div className={bm.Children("content")}>{props.children}</div>
        </section>
    );
}

export default Section;