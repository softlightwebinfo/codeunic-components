// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactNode } from "react";

export interface PopoverProps extends IProps {
    isClick?: boolean;
    isHover?: boolean;
    initialOpen?: boolean;
    trigger: string | ReactNode;
    text?: string;
}
