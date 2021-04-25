// Generated with util/create-component.js
import React from "react";

import { SlickListProps } from "./SlickList.types";

import "./SlickList.scss";
import { BEM } from "../../libs/BEM";
import SlickItem from "../SlickItem/SlickItem";
import Grid from "../Grid/Grid";

const SlickList: React.FC<SlickListProps> = (props) => {
    const {className, style, data = [], active = 0} = props;
    const bm = new BEM("SlickList", {
        isDetail: props.isDetail,
    });
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
    } else if (props.isDetail) {
        componentResult = [
            <Component key={0} {...data[active - 1] ?? data[data.length - 1]}/>,
            dataComponents,
            <Component key={2} {...data[active + 1] ?? data[0]}/>
        ];
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