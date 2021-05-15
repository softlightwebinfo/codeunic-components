// Generated with util/create-component.js
import React from "react";
import { ListDataItemProps } from "./ListDataItem.types";
import { BEM } from "../../libs/BEM";

const ListDataItem: React.FC<ListDataItemProps> = (props) => {
    const bm = new BEM("ListDataItem", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <b>{props.header}:</b>
            <span>{props.description}</span>
        </div>
    );
}

export default ListDataItem;

