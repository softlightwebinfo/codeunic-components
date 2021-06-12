// Generated with util/create-component.js
import React from "react";
import { TableColumnProps } from "./TableColumn.types";
import { BEM } from "../../libs/BEM";

const TableColumn: React.FC<TableColumnProps> = (props) => {
    const bm = new BEM("TableColumn", {
        isHeading: props.isHeading,
    });
    bm.Append(props.className)
    const Component = props.isHeading ? "th" : "td";
    return (
        <Component onClick={props.onClick} className={bm.toString()} style={props.style}>
            {props.children}
        </Component>
    );
}

export default TableColumn;