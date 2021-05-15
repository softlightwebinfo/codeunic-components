// Generated with util/create-component.js
import React from "react";
import { TableRowProps } from "./TableRow.types";
import { BEM } from "../../libs/BEM";

const TableRow: React.FC<TableRowProps> = (props) => {
    const bm = new BEM("TableRow", {});
    bm.Append(props.className)
    return (
        <tr className={bm.toString()} style={props.style}>
            {props.children}
        </tr>
    );
}

export default TableRow;