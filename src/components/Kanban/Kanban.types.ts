// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { PanelTaskProps } from "../PanelTask/PanelTask.types";

export interface KanbanProps extends IProps {
    onClick?(task: PanelTaskProps, panel: IKanbanPanel): void;

    panel: IKanbanPanel[];
}

export interface IKanbanPanel {
    id: number;
    title: string;
    tasks: PanelTaskProps[];
}