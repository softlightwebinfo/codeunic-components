// Generated with util/create-component.js
import React from "react";

import { SlickItemProps } from "./SlickItem.types";

import "./SlickItem.scss";
import { BEM } from "../../libs/BEM";

const SlickItem: React.FC<SlickItemProps> = (props) => {
    const bm = new BEM("SlickItem", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <img src={props.image} alt={props.title} title={props.title}/>
            {(props.title || props.description) && (
                <div>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            )}
            <style>{`
                h1 {              
                    background: url(images/bigTitle.jpg)                  
                }
            `}</style>
        </div>
    );
}

export default SlickItem;