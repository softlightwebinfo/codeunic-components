// Generated with util/create-component.js
import React from "react";

import { ListDataItemProps } from "./ListDataItem.types";

import style from "./ListDataItem.scss";
import { BEM } from "../../libs/BEM";

const ListDataItem: React.FC<ListDataItemProps> = (props) => {
    const bm = new BEM("ListDataItem", {}, style);
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <b>{props.header}:</b>
            <span>{props.description}</span>
        </div>
    );
}

export default ListDataItem;

