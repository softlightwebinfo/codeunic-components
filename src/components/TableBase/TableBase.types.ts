// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { IObject } from "../../interfaces/TObject";

export interface TableBaseProps extends IProps {
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
    text: string;
}