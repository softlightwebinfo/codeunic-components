// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactNode } from "react";

export interface BreadcrumbsProps extends IProps {
    component?(component: ReactNode, data: IBreadcrumb);

    data: IBreadcrumb[];
}

export interface IBreadcrumb {
    icon?: ReactNode;
    arrow?: ReactNode;
    data: ReactNode | string;
    route?: string;
    active?: boolean;
}