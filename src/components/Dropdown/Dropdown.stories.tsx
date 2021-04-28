// Generated with util/create-component.js
import React from "react";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "Dropdown/Dropdown"
};

export const Default = () => (
    <Dropdown
        trigger={<FontAwesomeIcon icon={faBell}/>}
        menu={<div>Hello world</div>}
    />
);
