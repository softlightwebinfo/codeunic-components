// Generated with util/create-component.js
import React from "react";
import { TablePriceProps } from "./TablePrice.types";
import { BEM } from "../../libs/BEM";
import PriceBox from "../PriceBox/PriceBox";
import PriceRow from "../PriceRow/PriceRow";
import { vars } from "../../settings/constants";
import ButtonDefault from "../ButtonDefault/ButtonDefault";

const TablePrice: React.FC<TablePriceProps> = (props) => {
    const bm = new BEM("TablePrice", {});
    bm.Append(props.className);
    const dataLength = props.columns.length;
    return (
        <div className={bm.toString()} style={props.style}>
            <div className={bm.Children("content")} style={{
                gridTemplateColumns: `1fr repeat(${dataLength}, ${vars.priceRowColumn})`
            }}>
                {props.columns.map((column, index) => (
                    <PriceBox active={props.active === index} {...column} key={index} style={{
                        gridColumn: `${index + 2}`
                    }}/>
                ))}
                {props.data.map((data, index) => (
                    <PriceRow active={props.active} {...data} key={index} style={{
                        gridColumn: `span ${dataLength + 1}`
                    }}/>
                ))}
                {props.columns.map((column, index) => (
                    <ButtonDefault style={{
                        gridColumn: `${index + 2}`
                    }} onClick={() => props.onClick(index)}>{props.buttonText ?? "Subscribir"}</ButtonDefault>
                ))}
            </div>
        </div>
    );
}

export default TablePrice;

