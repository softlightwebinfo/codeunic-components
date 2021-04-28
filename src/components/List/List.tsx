// Generated with util/create-component.js
import React from "react";
import { ListProps } from "./List.types";
import "./List.scss";
import { BEM } from "../../libs/BEM";

const List: React.FC<ListProps> = (props) => {
    const bm = new BEM("List", {});
    bm.Append(props.className);
    return (
        <ul
            className={bm.toString()} style={props.style}
        >
            {props.list.map((value, index) => (
                <li key={index}>{props.children?.(value, index)}</li>
            ))}
        </ul>
    );
}

export default List;