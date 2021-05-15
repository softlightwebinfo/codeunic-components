// Generated with util/create-component.js
import React from "react";
import { ParallexProps } from "./Parallax.types";
import { BEM } from "../../libs/BEM";

const Parallax: React.FC<ParallexProps> = (props) => {
    const bm = new BEM("Parallax", {});
    bm.Append(props.className);
    return (
        <section
            className={bm.toString()}
            style={{
                ...props.style ?? {},
                background: `url(${props.image}) 100% 0% fixed no-repeat`
            }}
        >
            <div className={bm.Children("content")}>
                {props.children}
            </div>
        </section>
    );
}

export default Parallax;

