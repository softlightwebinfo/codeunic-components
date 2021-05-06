// Generated with util/create-component.js
import React from "react";
import { WidgetStatProps } from "./WidgetStat.types";
import "./WidgetStat.scss";
import { BEM } from "../../libs/BEM";
import Widget from "../Widget/Widget";
import Round from "../../components/Round/Round";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const WidgetStat: React.FC<WidgetStatProps> = (props) => {
    const bm = new BEM("WidgetStat", {});
    bm.Children(props.className)
    return (
        <Widget className={bm.toString()} style={props.style}>
            <header>
                <span>{props.text}</span>
                <Round>{props.icon}</Round>
            </header>
            <div>
                <h4>{props.title}</h4>
                <span>
                    <FontAwesomeIcon icon={props.isUp ? faCaretUp : faCaretDown}/>
                    {props.textSecondary}
                </span>
            </div>
        </Widget>
    );
}

export default WidgetStat;