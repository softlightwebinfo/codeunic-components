// Generated with util/create-component.js
import React from "react";
import { CategoryProps } from "./Category.types";
import "./Category.scss";
import { BEM } from "../../libs/BEM";
import Badge from "../Badge/Badge";
import Image from "../Image/Image";

const Category: React.FC<CategoryProps> = (props) => {
    const bm = new BEM("Category", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <div className={bm.Children("cover")}>
                <Image title={props.title} alt={props.title} src={props.image}/>
            </div>
            <div className={bm.Children("content")}>
                {props.title && <h3 className={bm.Children("title")}>{props.title}</h3>}
                {props.badge && <Badge label={props.badge}/>}
                {props.list && (
                    <div className={bm.Children("list")}>
                        {props.list.map(item => <span key={item}>{item}</span>)}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Category;

