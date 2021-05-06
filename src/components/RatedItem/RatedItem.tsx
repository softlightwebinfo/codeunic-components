// Generated with util/create-component.js
import React from "react";
import { RatedItemProps } from "./RatedItem.types";
import "./RatedItem.scss";
import { BEM } from "../../libs/BEM";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlay } from "@fortawesome/free-solid-svg-icons";

const RatedItem: React.FC<RatedItemProps> = (props) => {
    const bm = new BEM("RatedItem", {});
    bm.Children(props.className);
    return (
        <Card default className={bm.toString()} style={props.style} image={props.image}>
            <header>
                <h6>{props.title}</h6>
                <p>{props.description}</p>
            </header>
            <footer>
                <div><FontAwesomeIcon icon={faEye}/> {props.views}</div>
                <div><FontAwesomeIcon icon={faPlay}/> {props.play}</div>
            </footer>
        </Card>
    );
}

export default RatedItem;