// Generated with util/create-component.js
import React from "react";
import { DetailWorkItemProps } from "./DetailWorkItem.types";
import { BEM } from "../../libs/BEM";
import TitleSubtitle from "../TitleSubtitle/TitleSubtitle";
import Badge from "../Badge/Badge";
import DatePoint from "../DatePoint/DatePoint";

const DetailWorkItem: React.FC<DetailWorkItemProps> = (props) => {
    const bm = new BEM("DetailWorkItem", {
        borderBottom: props.borderBottom,
    });
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            <DatePoint date={props.date}/>
            <TitleSubtitle default title={props.title} subTitle={props.subTitle}/>
            <Badge theme={props.labelTheme} label={props.label}/>
        </div>
    );
}

export default DetailWorkItem;