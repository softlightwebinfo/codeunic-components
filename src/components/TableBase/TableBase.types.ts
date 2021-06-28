// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { IObject } from "../../interfaces/TObject";
import { ReactNode } from "react";

export interface TableBaseProps extends IProps {
    onClick?(row: ITableRow, col: ITableColumn): void;

    stripe?: boolean;
    hover?: boolean;
    dark?: boolean;
    rows: ITableRow[];
    columns: ITableColumn[];
}

export interface ITableRow extends IObject {
    id: string;
}

export interface ITableColumn extends IObject {
    key: string;
    text: string | ReactNode;
}