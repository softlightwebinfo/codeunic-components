// Generated with util/create-component.js
import React from "react";
import { ActiveItemProps } from "./ActiveItem.types";
import "./ActiveItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { BEM } from "../../libs/BEM";

const ActiveItem: React.FC<ActiveItemProps> = (props) => {
    const bm = new BEM("ActiveItem", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <span>
                <FontAwesomeIcon icon={props.active ? faCheckCircle : faTimesCircle}/>
            </span>
            <span>{props.title}</span>
        </div>
    );
}

export default ActiveItem;