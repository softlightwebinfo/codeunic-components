// Generated with util/create-component.js
import React from "react";
import { AlertPmoProps } from "./AlertPmo.types";
import { BEM } from "../../libs/BEM";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";

const AlertPmo: React.FC<AlertPmoProps> = (props) => {
    const bm = new BEM("AlertPmo", {
        fixed: props.fixed,
    });
    bm.Append(props.className)
    return (
        <div data-testid="AlertPmo" className={bm.toString()} style={props.style}>
            <div className={bm.Children("content")}>
                {props.content}
            </div>
            <Button isIcon><FontAwesomeIcon icon={faTimes}/></Button>
        </div>
    );
}

export default AlertPmo;