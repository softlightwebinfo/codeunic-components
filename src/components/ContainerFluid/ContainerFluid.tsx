// Generated with util/create-component.js
import React from "react";
import { ContainerFluidProps } from "./ContainerFluid.types";
import "./ContainerFluid.scss";
import { BEM } from "../../libs/BEM";

const ContainerFluid: React.FC<ContainerFluidProps> = ({children, ...props}) => {
    const bm = new BEM("ContainerFluid", {
        default: props.default,
    });
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>{children}</div>
    );
}

export default ContainerFluid;