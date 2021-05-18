// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ITodoList } from "../../interfaces/ITodoList";

export interface PanelTaskProps extends IProps {
    onClick?();

    id: number;
    title: string;
    description: string;
    toDoList: ITodoList[];
}