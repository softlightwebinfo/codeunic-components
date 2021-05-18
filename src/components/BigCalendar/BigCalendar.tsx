// Generated with util/create-component.js
import React, { useCallback, useEffect, useState } from "react";
import { BigCalendarProps } from "./BigCalendar.types";
import { BEM } from "../../libs/BEM";
import Calendar from "../Calendar/Calendar";
import dayjs from "dayjs";

const BigCalendar: React.FC<BigCalendarProps> = (props) => {
    const currentDate = dayjs(props.date);
    const [state, setState] = useState(currentDate);
    const bm = new BEM("BigCalendar", {});
    bm.Append(props.className);
    const month = state.month();

    useEffect(() => {
        props.onClick?.(state);
    }, [state]);

    const onClick = useCallback((dat, dayjs) => {
        setState(dayjs.date(dat));
    }, []);

    return (
        <div className={bm.toString()} style={props.style}>
            {[...new Array(12)].map((day, index) => (
                <Calendar
                    onClick={onClick}
                    current={month == index}
                    date={state.month(index)}
                />
            ))}
        </div>
    );
}

export default BigCalendar;