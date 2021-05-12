// Generated with util/create-component.js
import React from "react";

import { GridColumnProps } from "./GridColumn.types";

import style from "./GridColumn.scss";
import { BEM } from "../../libs/BEM";

const GridColumn: React.FC<GridColumnProps> = (props) => {
    const bm = new BEM("GridColumn", {}, style);
    bm.Append(props.className);
    return (
        <div
            className={bm.toString()}
            style={{
                ...props.style,
                gridColumn: props.gridColumn,
                gridRow: props.gridRow,
            }}
        >
            {props.children}
        </div>
    );
}

export default GridColumn;

