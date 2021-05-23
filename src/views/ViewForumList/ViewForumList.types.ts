// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";

export interface ViewForumListProps extends IProps {
    data: IViewForumListItem[];
}

export interface IViewForumListItem {
    title: string;
    data: IViewForumListItemData[];
}

export interface IViewForumListItemData {
    title: string;
    threads: number;
    replies: number;
    lastUpdate: string;
    id: string;
}