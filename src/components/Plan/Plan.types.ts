// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { IPlanItem } from "../../interfaces/IPlanItem";
import { EOnClick } from "../../types/events.types";

export interface PlanProps extends IProps {
    onClick?(evt: EOnClick);

    buttonText?: string;
    price: string;
    priceBy: string;
    list: IPlanItem[];
    title: string;
    active?: boolean;
}
