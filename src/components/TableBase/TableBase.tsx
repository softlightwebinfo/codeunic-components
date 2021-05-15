// Generated with util/create-component.js
import React from "react";
import { TableBaseProps } from "./TableBase.types";
import { BEM } from "../../libs/BEM";
import TableColumn from "../TableColumn/TableColumn";
import TableRow from "../TableRow/TableRow";

const TableBase: React.FC<TableBaseProps> = (props) => {
    const bm = new BEM("TableBase", {
        stripe: props.stripe,
        dark: props.dark,
        hover: props.hover,
    });
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            <table className={bm.Children("table")}>
                <thead className={bm.Children("thead")}>
                <TableRow>
                    {props.columns.map((col) => (
                        <TableColumn isHeading key={col.key}>{col.text}</TableColumn>
                    ))}
                </TableRow>
                </thead>
                <tbody className={bm.Children("tbody")}>
                {props.rows.map((row, index) => (
                    <TableRow key={row.id ?? index}>
                        {props.columns.map((col) => (
                            <TableColumn key={col.key}>
                                {row[col.key]}
                            </TableColumn>
                        ))}
                    </TableRow>
                ))}
                </tbody>
            </table>
            {props.children}
        </div>
    );
}

export default TableBase;