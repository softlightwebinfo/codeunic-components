// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { IObjectCustom } from "../../interfaces/TObject";
import { ReactNode } from "react";

export type IMenu = {
    menu?: TMenu;
    label?: string;
    icon?: ReactNode;
};

export type TMenu = IObjectCustom<IMenu>;

export interface MenuProps extends IProps {
    horizontal?: boolean;
    menu: TMenu;

    component?(component: ReactNode, data: IMenuData);
}

export interface IMenuData extends IMenu {
    key: string;
}