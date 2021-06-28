// Generated with util/create-component.js
import React from "react";
import { AsideProps } from "./Aside.types";
import { BEM } from "../../libs/BEM";

const Aside: React.FC<AsideProps> = (props) => {
    const bm = new BEM("Aside", {});
    bm.Append(props.className)
    return (
        <aside data-testid="Aside" className={bm.toString()} style={props.style}>
            {props.children}
        </aside>
    );
}

export default Aside;