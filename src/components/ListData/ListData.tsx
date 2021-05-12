// Generated with util/create-component.js
import React from "react";

import { ListDataProps } from "./ListData.types";

import style from "./ListData.scss";
import { BEM } from "../../libs/BEM";
import ListDataItem from "../ListDataItem/ListDataItem";

const ListData: React.FC<ListDataProps> = (props) => {
    const bm = new BEM("ListData", {}, style);
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            {props.data.map(((value, index) => (
                <ListDataItem {...value} key={index}/>
            )))}
        </div>
    );
}

export default ListData;