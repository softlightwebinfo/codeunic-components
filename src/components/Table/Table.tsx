// Generated with util/create-component.js
import React from "react";
import { TableProps } from "./Table.types";
import { BEM } from "../../libs/BEM";

const Table: React.FC<TableProps> = (props) => {
    const bm = new BEM("Table", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>

        </div>
    );
}

export default Table;