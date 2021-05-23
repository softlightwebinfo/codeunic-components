// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";

export interface ViewForumThreadsProps extends IProps {
    data: IViewForumThreadsItem[];
}

export interface IViewForumThreadsItem {
    title: string;
    replies: number;
    status: string;
    lastUpdate: string;
    id: string;
}