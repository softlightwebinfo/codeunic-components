// Generated with util/create-component.js
import React, { useEffect, useState } from "react";
import { WidgetDateTimeProps } from "./WidgetDateTime.types";
import { BEM } from "../../libs/BEM";
import Widget from "../Widget/Widget";
import dayjs from "dayjs";
import CardHeader from "../../components/CardHeader/CardHeader";
import StatContent from "../../components/StatContent/StatContent";

const WidgetDateTime: React.FC<WidgetDateTimeProps> = (props) => {
    const [date, setDate] = useState(dayjs(props.date));
    const bm = new BEM("WidgetDateTime", {});
    bm.Append(props.className)
    useEffect(() => {
        const data = setInterval(() => {
            setDate(e => {
                return e.add(1, 'seconds');
            });
        }, 1000);
        return () => {
            clearInterval(data);
        }
    }, [])
    return (
        <Widget data-testid="WidgetDateTime" className={bm.toString()} style={props.style}>
            <CardHeader title={date.format("dddd, HH:mm:ss")} subTitle={""}/>
            <StatContent
                top={date.format("MMMM")}
                title={date.format("DD")}
                bottom={date.format("YYYY")}
            />
        </Widget>
    );
}

export default WidgetDateTime;