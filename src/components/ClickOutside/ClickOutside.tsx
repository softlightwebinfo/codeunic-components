// Generated with util/create-component.js
import React, { useRef } from "react";
import { ClickOutsideProps } from "./ClickOutside.types";
import style from "./ClickOutside.scss";
import { BEM } from "../../libs/BEM";
import { useOutside } from "../../hooks/useOutside";

const ClickOutside: React.FC<ClickOutsideProps> = (props) => {
    const wrapperRef = useRef(null);
    const bm = new BEM("ClickOutside", {}, style);
    bm.Append(props.className);
    useOutside(wrapperRef, props.onClick);
    return (
        <div ref={wrapperRef} className={bm.toString()} style={props.style}>
            {props.children}
        </div>
    );
}

export default ClickOutside;