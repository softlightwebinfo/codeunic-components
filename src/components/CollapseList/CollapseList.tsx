// Generated with util/create-component.js
import React from "react";

import { CollapseListProps } from "./CollapseList.types";

import style from "./CollapseList.scss";
import { BEM } from "../../libs/BEM";

const CollapseList: React.FC<CollapseListProps> = (props) => {
    const bm = new BEM("CollapseList", {}, style);
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            {React.Children.map(props.children, ((child) => {
                return child;
            }))}
        </div>
    );
}

export default CollapseList;