// Generated with util/create-component.js
import React from "react";
import { GridProps } from "./Grid.types";
import "./Grid.scss";
import { BEM } from "../../libs/BEM";

const Grid: React.FC<GridProps> = (props) => {
    const {isDefault = true} = props;
    const bm = new BEM("Grid", {
        default: isDefault,
        [`col-${props.col}`]: !!props.col,
    });
    bm.Append(props.className);
    return (
        <div style={props.style} className={bm.toString()}>
            {props.children}
        </div>
    );
}

export default Grid;

