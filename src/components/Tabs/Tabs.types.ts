// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TabProps } from "../Tab/Tab.types";

export interface TabsProps extends IProps {
    active: number;
    tabs: TabProps[];

    onClick?(index: number, tab: TabProps): void;
}