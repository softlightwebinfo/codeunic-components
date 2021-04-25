// Generated with util/create-component.js
import React from "react";

import { SlickListProps } from "./SlickList.types";

import "./SlickList.scss";
import { BEM } from "../../libs/BEM";
import SlickItem from "../SlickItem/SlickItem";
import Grid from "../Grid/Grid";

const SlickList: React.FC<SlickListProps> = (props) => {
    const {className, style, data = [], active = 0} = props;
    const bm = new BEM("SlickList", {});
    bm.Append(className)
    const Component: any = props.component ?? SlickItem;

    const dataComponents = data.map(((item, index) => {
        if (!props.col && (index != active)) return null;
        return (<Component key={index} {...item}/>);
    }));

    let componentResult = null;

    if (props.col) {
        componentResult = (
            <Grid col={props.col}>
                {dataComponents.slice(props.col * active, active > 0 ? (props.col * active) + props.col : props.col)}
            </Grid>
        )
    } else {
        componentResult = dataComponents;
    }

    return (
        <div className={bm.toString()} style={style}>
            {componentResult}
        </div>
    );
}

export default SlickList;