// Generated with util/create-component.js
import React from "react";
import { TitleCategoryProps } from "./TitleCategory.types";
import { BEM } from "../../libs/BEM";
import Button from "../Button/Button";

const TitleCategory: React.FC<TitleCategoryProps> = (props) => {
    const bm = new BEM("TitleCategory", {});
    return (
        <div className={bm.toString()} style={props.style}>
            <h4>{props.title}</h4>
            {props.right && <div>{props.right}</div>}
            {!props.hiddenRight && <Button onClick={props.onClick}>{props.buttonText ?? "Ver todo"}</Button>}
        </div>
    );
}

export default TitleCategory;