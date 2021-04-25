// Generated with util/create-component.js
import React from "react";

import { SlickVideoItemProps } from "./SlickVideoItem.types";

import "./SlickVideoItem.scss";
import { BEM } from "../../libs/BEM";
import Button from "../Button/Button";
import CardTitleDetail from "../CardTitleDetail/CardTitleDetail";

const SlickVideoItem: React.FC<SlickVideoItemProps> = (props) => {
    const {list = []} = props;
    const bm = new BEM("SlickVideoItem", {});
    return (
        <div className={bm.toString()}>
            <img src={props.image} alt={props.title} title={props.title}/>
            <section>
                <CardTitleDetail {...props} list={list}/>
                <div className={bm.Children("right")}>
                    <Button onClick={props.onClickRight}>{props.buttonRightText ?? 'Ver el trailer'}</Button>
                </div>
            </section>
        </div>
    );
}

export default SlickVideoItem;

