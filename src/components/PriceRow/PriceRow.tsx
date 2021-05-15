// Generated with util/create-component.js
import React from "react";
import { PriceRowProps } from "./PriceRow.types";
import { BEM } from "../../libs/BEM";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { vars } from "../../settings/constants";

const icon = (data) => {
    switch (typeof data) {
        case "undefined":
            break;
        case "object":
            break;
        case "boolean":
            return <FontAwesomeIcon icon={data ? faCheckCircle : faTimesCircle}/>;
        case "number":
            break;
        case "string":
            return <small style={{fontSize: ".6em"}}>{data}</small>;
        case "function":
            break;
        case "symbol":
            break;
        case "bigint":
            break;
    }
}

const PriceRow: React.FC<PriceRowProps> = (props) => {
    const bm = new BEM("PriceRow", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={{
            ...props.style,
            gridTemplateColumns: `1fr repeat(${props.data.length}, ${vars.priceRowColumn})`,
        }}>
            <div className={bm.Children("title")}>{props.title}</div>
            {props.data.map((data, index) => (
                <article key={index} className={bm.Modifier("article", "active", props.active === index)}>
                    {icon(data)}
                </article>
            ))}
        </div>
    );
}

export default PriceRow;

