// Generated with util/create-component.js
import React, { useMemo } from "react";
import { CalendarProps } from "./Calendar.types";
import { BEM } from "../../libs/BEM";
import dayjs from 'dayjs';
import weekday from "dayjs/plugin/weekday";
import "dayjs/locale/es";
import localeData from 'dayjs/plugin/localeData'
import duration from 'dayjs/plugin/duration'

dayjs.extend(localeData)
dayjs.locale('es')
dayjs.extend(weekday);
dayjs.extend(duration);

const Calendar: React.FC<CalendarProps> = (props) => {
    const bm = new BEM("Calendar", {
        current: props.current,
    });
    bm.Append(props.className)
    const day = dayjs(props.date)
    const startOfWeek = day.startOf("month");
    const endOfWeek = day.endOf("month");
    const startOfWeekDay = startOfWeek.day();
    const daysNumber = endOfWeek.date();
    const currentDay = day.date();

    const days = useMemo(() => {
        return dayjs.weekdaysShort();
    }, []);

    const body = useMemo(() => {
        let data = [];
        let stop = false;
        let dayNum = 0;
        let first = true;
        while (!stop) {
            const component = (
                <tr>
                    {days.map((key, index) => {
                        if ((first && (index) < startOfWeekDay) || dayNum >= daysNumber) {
                            return <td/>
                        }
                        const dy = ++dayNum;
                        return (
                            <td
                                onClick={() => props.onClick(dy, day)}
                                className={bm.Modifier("day", "active", props.current && (currentDay == dy))}
                            >
                                {dy}
                            </td>
                        )
                    })}
                </tr>
            )
            first = false;
            data.push(component);
            if (dayNum >= daysNumber) {
                stop = true;
            }
        }
        return data;
    }, [props.date]);

    return (
        <div className={bm.toString()} style={props.style}>
            <header>
                <span>{day.format("MMMM")}</span>
                <span>{day.year()}</span>
            </header>
            <table>
                <thead>
                <tr>
                    {days.map((day) => (
                        <th key={day}>{day}</th>
                    ))}
                </tr>
                </thead>
                <tbody>{body}</tbody>
            </table>
        </div>
    );
}

export default Calendar;