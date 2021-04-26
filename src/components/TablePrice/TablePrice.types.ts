// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { PriceBoxProps } from "../PriceBox/PriceBox.types";
import { PriceRowProps } from "../PriceRow/PriceRow.types";

export interface TablePriceProps extends IProps {
    active?: number;
    columns: PriceBoxProps[];
    data: PriceRowProps[];
    buttonText?: string;

    onClick(index: number): void;
}
