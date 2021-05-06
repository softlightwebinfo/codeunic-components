// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";

export interface ListProps extends IProps {
    list: any[];
    separator?: boolean;
    horizontal?: boolean;

    children?(item, index: number);
}
