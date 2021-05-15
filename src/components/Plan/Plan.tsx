// Generated with util/create-component.js
import React from "react";
import { PlanProps } from "./Plan.types";
import { BEM } from "../../libs/BEM";
import List from "../List/List";
import ActiveItem from "../ActiveItem/ActiveItem";
import Button from "../Button/Button";

const Plan: React.FC<PlanProps> = (props) => {
    const bm = new BEM("Plan", {
        best: props.active,
    });
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <h3 className={bm.Children("title")}>{props.title}</h3>
            <List list={props.list} className={bm.Children("list")}>
                {(item) => (<ActiveItem active={item.active} title={item.title}/>)}
            </List>
            <span className={bm.Children("price")}>{props.price} <small>/ {props.priceBy}</small></span>
            <Button className={bm.Children("button")} block dark onClick={props.onClick}>{props.buttonText ?? "Select plan"}</Button>
        </div>
    );
}

export default Plan;