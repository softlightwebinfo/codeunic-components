// Generated with util/create-component.js
import React from "react";
import Popover from "./Popover";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
    title: "Popover"
};

export const Default = () => <Popover
    trigger={<FontAwesomeIcon icon={faInfoCircle}/>}
    text={"Aiuda"}
/>;