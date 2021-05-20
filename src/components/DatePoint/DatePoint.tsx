// Generated with util/create-component.js
import React from "react";
import { DatePointProps } from "./DatePoint.types";
import { BEM } from "../../libs/BEM";
import dayjs from "dayjs";

const DatePoint: React.FC<DatePointProps> = (props) => {
    const bm = new BEM("DatePoint", {});
    bm.Append(props.className)
    const date = dayjs(props.date);
    return (
        <div data-testid="DatePoint" className={bm.toString()} style={props.style}>
            <div className={bm.Children("day")}>{date.date()}</div>
            <div className={bm.Children("month")}>{date.format("MMM")}</div>
        </div>
    );
}

export default DatePoint;