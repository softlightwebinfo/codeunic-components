// Generated with util/create-component.js
import React from "react";
import { TitleActionsProps } from "./TitleActions.types";
import style from "./TitleActions.scss";
import { BEM } from "../../libs/BEM";
import List from "../List/List";

const TitleActions: React.FC<TitleActionsProps> = (props) => {
    const bm = new BEM("TitleActions", {}, style);
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <h1>{props.title}</h1>
            <List horizontal separator list={props.list}>{((item) => item)}</List>
            {props.description && <p>{props.description}</p>}
        </div>
    );
}

export default TitleActions;