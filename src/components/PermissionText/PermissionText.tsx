// Generated with util/create-component.js
import React from "react";
import { PermissionTextProps } from "./PermissionText.types";
import style from "./PermissionText.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { BEM } from "../../libs/BEM";
import TextSmall from "../TextSmall/TextSmall";

const PermissionText: React.FC<PermissionTextProps> = (props) => {
    const bm = new BEM("PermissionText", {}, style);
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            <FontAwesomeIcon className={bm.Children("icon")} icon={faShieldAlt}/>
            <TextSmall title={props.title}/>
        </div>
    );
}

export default PermissionText;