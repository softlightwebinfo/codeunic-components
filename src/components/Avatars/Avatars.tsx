import React from "react";
import { BEM } from "../../libs/BEM";
import { AvatarsProps } from "./Avatars.types";

export const Avatars = (props: AvatarsProps) => {
    const {max = 4} = props;
    const bm = new BEM("Avatars", {});
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            {React.Children.map(props.children, ((child, index) => {
                if (index >= max) return null;
                return child;
            }))}
            {props.children.length > 4 ? <span>{'+' + (props.children.length - 4)}</span> : null}
        </div>
    )
}