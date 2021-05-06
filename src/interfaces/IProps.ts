import { CSSProperties, ReactNode } from "react";

export interface IProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    default?: boolean;
}